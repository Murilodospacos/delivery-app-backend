const express = require('express');
const cors = require('cors');
const path = require('path');
const loginRouter = require('./routes/loginRouter');
const registerRouter = require('./routes/registerRouter');
const manageRouter = require('./routes/manageRouter');
const productRouter = require('./routes/productRouter');
const saleRouter = require('./routes/saleRouter');

const app = express();
app.use(express.json());

app.use(cors());

app.use('/images', express.static(path.join(__dirname, '..', '..', 'public')));

app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/admin/manage', manageRouter);
app.use('/products', productRouter);
app.use('/sales', saleRouter);
app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;