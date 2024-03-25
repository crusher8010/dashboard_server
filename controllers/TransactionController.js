const Transaction = require('../models/transactionModel');

exports.getAllTransactions = async (req, res) => {
    try {
        const products = await Transaction.find().limit(50).sort({ createdOn: -1 });
        res.status(200).json(products);
    } catch (err) {
        res.status(400).json({
            status: 'failure',
            message: err.message
        })
    }
}