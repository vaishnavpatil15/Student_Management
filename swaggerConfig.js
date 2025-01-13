const swaggerJsDoc = require("swagger-jsdoc");
require("dotenv").config();

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My Student Application",
      version: "1.0.0",
      description: "Swagger API Documentation",
    },
    servers: [
      {
        url: `http://localhost:${process.env.LOCAL_HOST_PORT}`, // Replace with your server URL
      },
    ],
  },
  apis: ["./routes/*.js"], // Paths to files containing OpenAPI definitions
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
module.exports = swaggerDocs;
