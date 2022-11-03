import express, { NextFunction, Request, Response } from 'express';

import todosRoutes from './routes/todos.routes';

const app = express();

app.use(express.json());
app.use('/todos', todosRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  return res.status(500).json({ message: err.message });
});

app.listen(3000);
