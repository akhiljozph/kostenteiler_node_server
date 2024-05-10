import express, { Request, Response, Application } from 'express';

import routes from './routes/routes';

const swagger = require('./swagger.js');

const app: Application = express();
const port = process.env.PORT || 8000;

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Kostenteiler!');
});

swagger(app);

app.listen(port, () => {
  console.log(`Server is Fired at http://localhost:${port}`);

  routes(app);
});