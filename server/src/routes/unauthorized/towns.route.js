const router = require("express").Router()
const controller = require("../../controllers").towns

router.get("/townContructionUpdates", controller.getAllActiveTownConstructionUpdate)
// router.get("/blogDetail/:id", controller.getBlogDetailById)

router.get("/townDetail/:id", controller.getSingleTown)

module.exports = router