import { Application, Request, Response } from "express";

import validateResource from "../middleware/validateResource";
import { createUserSchema } from "../schema/user.schema";
import { createUserHandler } from "../controllers/user.controller";
import { createLoginSessionSchema } from "../schema/session.schema";
import { createLoginSessionHandler } from "../controllers/session.controller";

const routes = (app: Application) => {
  /**
   * @openapi
   * '/api/v1/user':
   *  post:
   *     tags:
   *     - User Controller
   *     summary: Create a user
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *            type: object
   *            required:
   *              - fullName
   *              - email
   *              - username
   *              - password
   *            properties:
   *              fullName:
   *                type: string
   *                default: John Doe
   *              email:
   *                type: string
   *                default: johndoe@gmail.com
   *              username:
   *                type: string
   *                default: johnDoe
   *              password:
   *                type: string
   *                default: njD@052024
   *     responses:
   *      201:
   *        description: Created
   *      409:
   *        description: Conflict
   *      404:
   *        description: Not Found
   *      500:
   *        description: Server Error
   */
  app.post(
    "/api/v1/user",
    validateResource(createUserSchema),
    createUserHandler
  );

  app.post(
    "/api/v1/auth",
    validateResource(createLoginSessionSchema),
    createLoginSessionHandler
  );

  app.post("/api/v1/group", (req: Request, res: Response) => {
    res.send("API for group creation");
  });

  app.get("/api/v1/users", (req: Request, res: Response) => {
    res.send("API for fetch all users");
  });
};

export default routes;
