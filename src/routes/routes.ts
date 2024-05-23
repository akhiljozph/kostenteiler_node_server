import { Application, Request, Response } from "express";

import validateResource from "../middleware/validateResource";
import { createUserSchema } from "../schema/user.schema";
import { createUserHandler } from "../controllers/user.controller";
import { createLoginSessionSchema } from "../schema/session.schema";
import { createLoginSessionHandler } from "../controllers/session.controller";
import log from "../utils/logger";

const routes = (app: Application) => {

  /**
   * @swagger
   *    paths:
   *      '/api/v1/auth':
   *        post:
   *          tags:
   *          - Auth Controller
   *          summary: Creates a valid login session.
   *          consumes:
   *            - application/json
   *          parameters:
   *            - in: body
   *              name: loginData
   *              description: Login credentials of the user.
   *              schema:
   *                type: object
   *                required:
   *                  - username
   *                  - password
   *                properties:
   *                  username:
   *                    type: string
   *                  password:
   *                    type: string
   *          responses:
   *            201:
   *              description: Created
   *            400:
   *              description: Bad Request
   *            401:
   *              description: Unauthorized
   *            404:
   *              description: Not Found
   *            408:
   *              description: Request Timeout
   *            409:
   *              description: Conflict
   *            500:
   *              description: Server Error
   */
  app.post(
    "/api/v1/auth",
    validateResource(createLoginSessionSchema),
    createLoginSessionHandler
  );

  /**
   * @swagger
   *    paths:
   *      '/api/v1/user':
   *        post:
   *          tags:
   *          - User Controller
   *          summary: Create a user account.
   *          consumes:
   *            - application/json
   *          parameters:
   *            - in: body
   *              name: user
   *              description: User details which need to be created.
   *              schema:
   *                type: object
   *                required:
   *                  - fullName
   *                  - email
   *                  - username
   *                  - password
   *                properties:
   *                  fullName:
   *                    type: string
   *                  email:
   *                    type: string
   *                  dateOfBirth:
   *                    type: string
   *                  gender:
   *                    type: string
   *                  username:
   *                    type: string
   *                  password:
   *                    type: string
   *          responses:
   *            201:
   *              description: Created
   *            409:
   *              description: Conflict
   *            404:
   *              description: Not Found
   *            500:
   *              description: Server Error
   */
  app.post(
    "/api/v1/user",
    validateResource(createUserSchema),
    createUserHandler
  );

  /**
   * @swagger
   * paths:
   *    /api/v1/users/{userId}:
   *      get:
   *        tags:
   *        - User Controller
   *        summary: Get details of a specific user (TODO).
   *        parameters:
   *          - in: path
   *            name: userId
   *            required: true
   *            type: string
   *        responses:
   *          200:
   *            description: Success
   */
  app.get("/api/v1/users/:userId", (req: Request, res: Response) => {
    res.send("API for fetching specific user details");
  });

  /**
   * @swagger
   * paths:
   *    /api/v1/user/{userId}:
   *      put:
   *        tags:
   *        - User Controller
   *        summary: Update whole details of a specific user (TODO).
   *        parameters:
   *          - in: path
   *            name: userId
   *            required: true
   *            type: string
   *        responses:
   *          200:
   *            description: OK
   */
  app.put("/api/v1/user/{userId}", (req: Request, res: Response) => {
    res.send("API for updating specific user details");
  });

  /**
   * @swagger
   * paths:
   *    /api/v1/user/{userId}:
   *      patch:
   *        tags:
   *        - User Controller
   *        summary: Update a specific user details (TODO).
   *        parameters:
   *          - in: path
   *            name: userId
   *            required: true
   *            type: string
   *        responses:
   *          200:
   *            description: OK
   */
  app.patch("/api/v1/user/{userId}", (req: Request, res: Response) => {
    res.send("API for updating specific user details");
  });

  /**
   * @swagger
   * '/api/v1/user/{userId}':
   *  delete:
   *     tags:
   *     - User Controller
   *     summary: Delete a specific user (TODO).
   *     responses:
   *        200:
   *        description: Success
   */
  app.delete("/api/v1/user/{userId}", (req: Request, res, Response) => {
    res.send("API for deleting a specific user");
  });

  /**
   * @swagger
   * '/api/v1/users':
   *  get:
   *     tags:
   *     - User Controller
   *     summary: Get details of all users (TODO).
   *     responses:
   *        200:
   *        description: Success
   */
  app.get("/api/v1/users", (req: Request, res: Response) => {
    res.send("API for fetch all users");
  });
};

export default routes;
