import { Application, Request, Response, urlencoded } from "express";

import validateResource from "../middleware/validateResource";
import { createUserSchema } from "../schema/user.schema";
import { createUserHandler } from "../controllers/user.controller";

const routes = (app: Application) => {

    app.post("/api/v1/user", validateResource(createUserSchema), createUserHandler);

    app.post("/api/v1/group", (req: Request, res: Response) => {
        res.send('API for group creation');
    });

    app.get("/api/v1/users", (req: Request, res: Response) => {
        res.send('API for fetch all users');
    });

};

export default routes;