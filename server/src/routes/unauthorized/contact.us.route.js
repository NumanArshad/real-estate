const router = require("express").Router()
const controller = require("../../controllers").contactUs

router.post("/addContactUs", controller.addContactUs)

module.exports = router