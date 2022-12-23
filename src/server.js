import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import authRoutes from './routes/authRoutes.js';
import rankingRoutes from './routes/rankingRoutes.js';
import urlsRoutes from './routes/urlsRoutes.js';
import usersRoutes from './routes/usersRoutes.js';

dotenv.config();

const server = express();

server.use(express.json());
server.use(cors());

server.use(authRoutes);
server.use(urlsRoutes);
server.use(usersRoutes);
server.use(rankingRoutes);

const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
