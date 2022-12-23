import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import connection from '../database/db.js';

export const signUp = async (req, res) => {
  try {
    const { name, email, password } = res.locals.user;
    const passwordHash = bcrypt.hashSync(password, 10);

    await connection.query(
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3)',
      [name, email, passwordHash]
    );
    return res.sendStatus(201);
  } catch (error) {
    if (error?.constraint === 'users_email_key') {
      return res.sendStatus(409);
    }
    return res.sendStatus(500);
  }
};

export const signIn = async (req, res) => {
  const { email, password } = res.locals.user;
  try {
    const {
      rows: [user],
    } = await connection.query('SELECT * FROM users WHERE email = $1', [email]);
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
        expiresIn: '7d',
      });
      await connection.query(
        `INSERT INTO tokens ("userId", token) 
        VALUES ($1, $2)
        ON CONFLICT ("userId") DO UPDATE 
          SET token = excluded.token`,
        [user.id, token]
      );
      return res.status(200).send(token);
    }
    return res.status(401).send('Invalid email or password');
  } catch (error) {
    console.log(error);
    return res.status(500).send('Error logging in');
  }
};
