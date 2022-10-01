const router = require("express").Router()
const controller = require("../../controllers").contactUs

router.get("/allContactList", controller.getAllContactUsList)

module.exports = router