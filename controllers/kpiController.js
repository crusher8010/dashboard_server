const KPI = require('../models/kpiModel');

exports.getAllKpis = async (req, res) => {
    try {
        const kpis = await KPI.find();
        res.status(200).json(kpis);

    } catch (err) {
        res.status(404).json({
            status: 'failure',
            message: err.message
        })
    }
}