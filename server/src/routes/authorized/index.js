/**
 * Created by Mb
 */

const express = require("express");
const router = express.Router();
var auth = require("../../middlewares").auth;

const usersRoutes = require("./users.route");
// const saleAgentRoutes = require("./sale-agents.route")
const blogsRoutes = require("./blogs.route");
const townsRoutes = require("./towns.route");
const marketRatesRoutes = require("./market.rates.route");
const mapRoutes = require("./map.route");
const propertyRoutes = require("./properties.route")
const contactUsRoutes = require("./contact.us.route")
//call appropriate routes

//@route     users
//@desc     inital route
//@access   private
router.use("/users", auth.authenticate, usersRoutes);
// router.use("/sale-agent", auth.authenticate, saleAgentRoutes);

router.use("/blogs", auth.authenticate, blogsRoutes);
router.use("/towns", auth.authenticate, townsRoutes);
router.use("/maps", auth.authenticate, mapRoutes);
router.use("/market-rates", auth.authenticate, marketRatesRoutes);
router.use("/properties", auth.authenticate, propertyRoutes);
router.use("/contactUs", auth.authenticate, contactUsRoutes)

module.exports = router;
