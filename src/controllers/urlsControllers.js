import { nanoid } from 'nanoid';
import connection from '../database/db.js';

export const shorten = async (req, res) => {
  const { userId } = res.locals;
  const { url } = res.locals;
  try {
    const shortUrl = await nanoid(8);
    connection.query(
      'INSERT INTO urls ("shortUrl", url, "userId") VALUES ($1, $2, $3)',
      [shortUrl, url, userId]
    );
    return res.status(201).send({ shortUrl });
  } catch (error) {
    return res.status(500).send('Error creating shorten url');
  }
};

export const id = async (req, res) => {
  const { url } = req.body;
  try {
    return res.send(shortUrl);
  } catch (error) {
    return res.status(500).send('Error logging in');
  }
};
