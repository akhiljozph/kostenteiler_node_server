import { Express, Request, Response } from "express";
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { version } from '../package.json';
import log from "./utils/logger";

const options: swaggerJsdoc.Options = {
    definition: {
        info: {
            title: 'Kostenteiler',
            version,
            description: 'API documentation for kostenteiler server.'
        },
        components: {
            securitySchemas: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
        security: [
            {
                bearerAuth: [],
            }
        ]
    },
    apis: [
        './src/app.ts', './src/routes/*.ts'
    ]
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app: Express, port: number) {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    app.get('/docs.json', (req: Request, res: Response) => {
        res.setHeader('Content-type', 'application/json');
    });

    log.info(`Docs available at http://localhost:${port}/api-docs`);
}

export default swaggerDocs;