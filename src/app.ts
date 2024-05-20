import express, { Request, Response } from "express";

import routes from "./routes/routes";
import swaggerDocs from "./swagger";
import connect from "./utils/connect";
import log from "./utils/logger";

const app = express();
const port = 8090;

swaggerDocs(app, port);

app.use(express.json());
app.listen(port, async () => {
  log.info(`Server is Fired at http://localhost:${port}`);

  await connect();

  routes(app);
});

/**
 *  @openapi
 *  '/':
 *  get:
 *     tags:
 *     - Default Controller
 *     responses:
 *      200:
 *        description: Success
 */
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Kostenteiler!");
});
