import { nanoid } from 'nanoid';
import connection from '../database/db.js';

export const shorten = async (req, res) => {
  const { userId } = res.locals;
  const { url } = res.locals;
  try {
    const shortUrl = await nanoid(8);
    await connection.query(
      'INSERT INTO urls ("shortUrl", url, "userId") VALUES ($1, $2, $3)',
      [shortUrl, url, userId]
    );
    return res.status(201).send({ shortUrl });
  } catch (error) {
    return res.status(500).send('Error creating shorten url');
  }
};

export const getUrlsById = async (req, res) => {
  const { id } = req.params;
  try {
    const {
      rows: [urlData],
    } = await connection.query(
      'SELECT id, "shortUrl", url FROM urls WHERE id=$1',
      [id]
    );
    if (!urlData) return res.sendStatus(404);
    return res.status(200).send(urlData);
  } catch (error) {
    return res.status(500).send('Error getting url data');
  }
};

export const redirectToUrl = async (req, res) => {
  const { shortUrl } = req.params;
  try {
    const {
      rows: [data],
    } = await connection.query(
      'UPDATE urls SET visits = visits + 1 WHERE "shortUrl"=$1 RETURNING url',
      [shortUrl]
    );
    if (!data) return res.sendStatus(404);
    return res.redirect(data.url);
  } catch (error) {
    return res.status(500).send('Error redirecting');
  }
};

export const deleteUrl = async (req, res) => {
  const { id } = req.params;
  const { userId } = res.locals;
  try {
    const { rowCount: deletedRows } = await connection.query(
      'DELETE FROM urls WHERE id=$1 AND "userId"=$2',
      [+id, userId]
    );
    if (deletedRows === 0) {
      const {
        rows: [data],
      } = await connection.query('SELECT * FROM urls WHERE id=$1', [id]);
      if (!data) return res.sendStatus(404);
      return res.sendStatus(401);
    }
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).send('Error deleting shorten link');
  }
};
