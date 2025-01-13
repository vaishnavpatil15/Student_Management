const express = require('express');
const bodyParser = require('body-parser');
require("dotenv").config();
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("./swaggerConfig");



const userRoutes = require('./routes/userRoutes');
const deptRoutes = require('./routes/deptRoutes');
const loginRoutes = require('./routes/loginRoutes')

const app = express();
app.use(bodyParser.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/api/users', userRoutes);
app.use('/api/departments', deptRoutes);
app.use('/api/login', loginRoutes);

const PORT = process.env.LOCAL_HOST_PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
    console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});
