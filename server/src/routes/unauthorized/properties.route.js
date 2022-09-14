const router = require("express").Router()
const controller = require("../../controllers").properties

router.get("/activeProperties", controller.getAllActiveProperties)
router.get("/propertiesDropdownOptions", controller.getAllPropertiesDropDownOptions)
router.get("/getAllActivePropertiesList", controller.getAllActivePropertiesList)
router.get("/propertyAndSaleAgentDetail/:id", controller.propertyDetail)
router.param("id", controller.propertyById)

module.exports = router