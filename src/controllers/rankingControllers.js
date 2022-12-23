import connection from '../database/db.js';

// eslint-disable-next-line import/prefer-default-export
export const getTop10 = async (req, res) => {
  try {
    const { rows: data } = await connection.query(
      `SELECT 
         users.id, 
         users.name,
         COALESCE(COUNT(urls."userId"), 0) AS "linksCount",
         COALESCE(SUM(urls.visits), 0) AS "visitCount"
       FROM users
       LEFT JOIN urls ON users.id = urls."userId"
       GROUP BY users.id
       ORDER BY "visitCount" DESC, "linksCount" DESC, users.id
       LIMIT 10`
    );
    return res.send(data);
  } catch (error) {
    return res.status(500).send('Error getting top 10 users');
  }
};
