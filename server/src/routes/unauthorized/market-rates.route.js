/**
 * Created by Mb
 */

const express = require("express");
const router = express.Router();

const controller = require("../../controllers/admin/market.rates.controller");

router.get("/getAll", controller.getAllMethod);
module.exports = router;
