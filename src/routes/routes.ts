import { Application, Request, Response } from "express";

const routes = (app: Application) => {

    app.post("/api/v1/user", (req: Request, res: Response) => {
        res.send('API for user creation');
    });

    app.post("/api/v1/group", (req: Request, res: Response) => {
        res.send('API for group creation');
    });

    app.get("/api/v1/users", (req: Request, res: Response) => {
        res.send('API for fetch all users');
    });

};

export default routes;