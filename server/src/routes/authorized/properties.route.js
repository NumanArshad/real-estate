const router = require("express").Router()
const controller = require("../../controllers").properties
const { uploadMultipleFile } = require("../../helpers/uploadImages.helper")

router.post("/create", uploadMultipleFile, controller.addProperty)
router.put("/update/:id", uploadMultipleFile, controller.updateProperty)
router.get("/get/:id", controller.getSingleProperty)
router.get("/", controller.getAllProperties)
router.patch("/updateActiveStatus/:id", controller.activateInActiveProperty)
router.param("id", controller.propertyById)
router.post("/upload", uploadMultipleFile)
router.delete("/delete/:id", controller.removeProperty)
module.exports = router


