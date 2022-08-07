const router = require("express").Router()
const controller = require("../../controllers").properties

router.get("/activeProperties", controller.getAllActiveProperties)
router.get("/propertyAndSaleAgentDetail/:id", controller.propertyDetail)
router.param("id", controller.propertyById)

module.exports = router