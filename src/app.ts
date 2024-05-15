import express, { Request, Response } from 'express';

import swaggerDocs from './swagger';
import connect from './utils/connect';

const app = express();
const port = 8090;

swaggerDocs(app, port);

app.use(express.json());
app.post('/', (req, res) => {
  const { name } = req.body;

  res.send(`Welcome ${name}`);
})

app.listen(port, async () => {
  console.log(`Server is Fired at http://localhost:${port}`);

  await connect();
});

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Kostenteiler!');
});