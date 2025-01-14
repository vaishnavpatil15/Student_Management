const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');
require("dotenv").config();

const userRoutes = require('./routes/userRoutes');
const deptRoutes = require('./routes/deptRoutes');
const loginRoutes = require('./routes/loginRoutes')

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/api/departments', deptRoutes);
app.use('/api/login', loginRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});
