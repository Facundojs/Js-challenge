const express = require('express');
const app = express();
const cors = require('cors');
const methodOverride = require("method-override");
const bodyParser = require('body-parser');
// Global middlewares
app.use(bodyParser());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(methodOverride("_method"));

const DB_PORT = 3010;

app.listen(DB_PORT, () => {
    console.log(`Server running on http://localhost:${DB_PORT}`);
});

// Routers
const userRouter = require('./routes/userRouter');
const operationsRouter = require('./routes/operationsRouter');

app.use('/api/v1/users', userRouter);
app.use('/api/v1/operations', operationsRouter);