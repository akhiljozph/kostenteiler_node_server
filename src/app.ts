import express, { Request, Response } from 'express';

import routes from './routes/routes';
import swaggerDocs from './swagger';
import connect from './utils/connect';

const app = express();
const port = 8090;

swaggerDocs(app, port);

app.listen(port, async () => {
  console.log(`Server is Fired at http://localhost:${port}`);

  await connect();

  routes(app);
});

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Kostenteiler!');
});