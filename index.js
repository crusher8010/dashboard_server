const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const kpiRoutes = require('./routes/kpi.js');
const productRoutes = require('./routes/product.js');
const transactionRoutes = require('./routes/transaction.js');
const KPI = require('./models/kpiModel.js');
const Transaction = require('./models/transactionModel.js');
const Product = require('./models/productModel.js')
const { kpis, products, transactions } = require('./data/data.js');

dotenv.config();
const app = express();
const port = process.env.PORT || 9000;

// middlewares
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({
    origin: "*"
}));

// Routes



// Database Connection
const db = process.env.URL;
mongoose.connect(db).then(async () => {
    console.log('Database is connected');

    // Adding Data for One time only As needed
    // await mongoose.connection.db.dropDatabase();
    // KPI.insertMany(kpis);
    // Transaction.insertMany(transactions);
}).catch((err) => {
    console.log('Not Connected...');
    console.log(err);
});

app.use('/kpi', kpiRoutes);
app.use('/product', productRoutes);
app.use('/transaction', transactionRoutes);

app.listen(port, () => {
    console.log(`Server is running on ${port} port...`)
})