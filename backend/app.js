const express = require('express');
const cors = require('cors');
const merchantRoutes = require('./routes/merchantRoutes');
const errorMiddleware = require('./middlewares/errorMiddleware');

/* Дополнение */
import api from '../utils/api';
const getMerchants = () => api.get('/api/merchants');
export { getMerchants };


const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/merchants', merchantRoutes);
app.use(errorMiddleware);

module.exports = app;
