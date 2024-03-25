const express = require('express');

const { getAllKpis } = require('../controllers/kpiController');

const router = express.Router();

router.route('/kpis').get(getAllKpis);

module.exports = router;