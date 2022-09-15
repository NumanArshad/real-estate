const router = require("express").Router()
const controller = require("../../controllers").maps

router.get("/activeTownMaps", controller.getAllMethod)

module.exports = router