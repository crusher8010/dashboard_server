const mongoose = require('mongoose');
const { loadType } = require('mongoose-currency');

loadType(mongoose);

const TransactionSchema = new mongoose.Schema(
    {
        buyer: {
            type: String,
            required: true,
        },
        amount: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v / 100,
        },
        productIds: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
            },
        ],
    },
    { timestamps: true, toJSON: { getters: true } }
);

const Transaction = mongoose.model("Transaction", TransactionSchema);

module.exports = Transaction;