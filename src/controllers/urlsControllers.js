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
    const { rows: urlData } = await connection.query(
      'SELECT id, "shortUrl", url FROM urls WHERE id=$1',
      [id]
    );
    if (urlData.length === 0) return res.sendStatus(404);
    return res.status(200).send(urlData);
  } catch (error) {
    return res.status(500).send('Error getting url data');
  }
};
