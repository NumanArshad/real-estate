const router = require("express").Router()
const controller = require("../../controllers").blogs

router.get("/approvedBlogs", controller.getApprovedBlogs)
router.get("/blogDetail/:id", controller.getBlogDetailById)

module.exports = router