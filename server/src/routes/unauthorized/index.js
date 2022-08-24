/**
 * Created by Mb
 */

const express = require("express");
const router = express.Router();

const usersRoutes = require("./auth.route");
const propertyRoutes = require("./properties.route")
const saleAgentRoutes = require("./sale-agents.route")
const blogsRoutes = require("./blogs.route")
const townsRoutes = require("./towns.route")
//@route     auth
//@desc     inital route
//@access   Public
router.use("/auth", usersRoutes);
router.use("/properties", propertyRoutes)
router.use("/saleAgents", saleAgentRoutes)
router.use("/blogs", blogsRoutes)
router.use("/towns", townsRoutes)

module.exports = router;
