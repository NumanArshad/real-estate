/**
 * Created by Mb
 */

const express = require("express");
const { uploadSingleFile } = require("../../helpers/uploadImages.helper");
const router = express.Router();
// var permit = require("../../middlewares").permit;

//controller
const controller = require("../../controllers").maps;

//uploader
// var multer = require("multer");
// var storage = multer.diskStorage({});
// var upload = multer({ storage: storage });

//blog
//  router.post("/addBlog",permit('admin designer'),upload.fields([{ name: 'blogImage', maxCount: 1 }]), blog.addNewBlog);
router.post("/add", uploadSingleFile, controller.addMethod);
//  router.post("/uploadImage",upload.fields([{ name: 'blogImage', maxCount: 1 }]), blog.uploadBlogImage);
// router.get("/getTown", town.getSingleTown);
router.get("/getAll", controller.getAllMethod);
router.post("/update", uploadSingleFile, controller.updateMethod);
router.get("/getSingle", controller.getSingleDetailMethod);
router.delete("/delete/:id", controller.removeMethod);
router.patch("/updateActiveStatus/:id", controller.activateInActivateMethod)
module.exports = router;
