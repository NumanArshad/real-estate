/**
 * Created by Mb
 */

const express = require("express");
const router = express.Router();
var permit = require("../../middlewares").permit;

const controller = require("../../controllers").user;
const { uploadSingleFile } = require("../../helpers/uploadImages.helper");

//@route    GET users
//@desc     current user data
//@access   Private
router.post("/add", uploadSingleFile, controller.createUser);
router.get("/get/:id", controller.getSingleUser);
router.get("/all", controller.getAllUser);
router.post("/update", controller.updateUser);
router.put("/activateInActiveUser/:id", controller.activateInActiveUser);

module.exports = router;
