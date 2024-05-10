const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi  =require('swagger-ui-express');

const options = {
    swaggerDefinition: {
        restapi: '3.0.0',
        info: {
            title: 'Kostenteiler.',
            version: '1.0.0',
            description: 'API documentation for kostenteiler server.',
        },
        servers: [
            {
                url: 'http://localhost:8000',
            },
        ],
    },
    apis: ['.routes/*.ts'],
}

const specs = swaggerJsdoc(options);

module.exports = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))
}