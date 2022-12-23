import connection from '../database/db.js';

// eslint-disable-next-line import/prefer-default-export
export const getUserLinks = async (req, res) => {
  const { userId } = res.locals;
  try {
    const {
      rows: [data],
    } = await connection.query(
      `SELECT users.id, users.name,
       COALESCE(SUM(urls.visits), 0) AS "visitCount",
       ARRAY_AGG (JSON_BUILD_OBJECT(
         'id', urls.id,
         'shortUrl', urls."shortUrl",
         'url', urls.url,
         'visitCount', urls.visits
         )) AS "shortenedUrls"
       FROM users
       JOIN urls ON users.id = urls."userId"
       WHERE users.id=($1)
       GROUP BY users.id`,
      [userId]
    );
    if (!data) {
      const {
        rows: [user],
      } = await connection.query('SELECT * FROM urls WHERE "userId"=$1', [
        userId,
      ]);
      if (!user) return res.sendStatus(404);
      return res.sendStatus(401);
    }
    return res.send(data);
  } catch (error) {
    return res.status(500).send('Error getting user data');
  }
};
