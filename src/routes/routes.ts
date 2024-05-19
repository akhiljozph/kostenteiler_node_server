import { Application, Request, Response, urlencoded } from "express";

import validateResource from "../middleware/validateResource";
import { createUserSchema } from "../schema/user.schema";
import { createUserHandler } from "../controllers/user.controller";
import { createLoginSessionSchema } from "../schema/session.schema";
import { createLoginSessionHandler } from "../controllers/session.controller";

const routes = (app: Application) => {

    app.post("/api/v1/user", validateResource(createUserSchema), createUserHandler);

    /** 
    * @swagger
    * /api/v1/auth:
    *   post:
    *       summary: Create a login session
    *       description: Verifies the user credentials and creates a valid login session.
    *       schema:
    *           type: string
    *           responses:
    *               200:
    *               description: Successful response
    */
    app.post("/api/v1/auth", validateResource(createLoginSessionSchema), createLoginSessionHandler);

    app.post("/api/v1/group", (req: Request, res: Response) => {
        res.send('API for group creation');
    });

    app.get("/api/v1/users", (req: Request, res: Response) => {
        res.send('API for fetch all users');
    });

};

export default routes;