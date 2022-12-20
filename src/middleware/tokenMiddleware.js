import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import connection from '../database/db.js';

export default async function tokenMiddleware(req, res, next) {
  dotenv.config();
  const { authorization } = req.headers;
  const token = authorization?.replace('Bearer ', '');

  try {
    const { userId } = jwt.verify(token, process.env.JWT_SECRET);
    const { rowCount: loginAuthorized } = await connection.query(
      'SELECT * FROM tokens WHERE "token" = $1',
      [token]
    );
    if (!loginAuthorized) throw new Error();
    res.locals.userId = userId;
    next();
  } catch {
    res.status(401).send('Access denied');
  }
}
