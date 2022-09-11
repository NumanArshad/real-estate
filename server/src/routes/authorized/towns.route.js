/**
 * Created by Mb
 */

const express = require("express");
const router = express.Router();
// var permit = require("../../middlewares").permit;

//controller
const town = require("../../controllers/admin/towns.controller");
const { uploadMultipleFile } = require("../../helpers/uploadImages.helper");

//uploader
// var multer = require("multer");
// var storage = multer.diskStorage({});
// var upload = multer({ storage: storage });

//blog
//  router.post("/addBlog",permit('admin designer'),upload.fields([{ name: 'blogImage', maxCount: 1 }]), blog.addNewBlog);
router.post("/addTown", uploadMultipleFile, town.addNewTown);
//  router.post("/uploadImage",upload.fields([{ name: 'blogImage', maxCount: 1 }]), blog.uploadBlogImage);
// router.get("/getTown", town.getSingleTown);
router.get("/getAllTown", town.getAllTown);
router.get("/activeTownOptions", town.getAllActiveTownName)
router.put("/updateTown", uploadMultipleFile, town.updateTown);
router.get("/getSingleTown", town.getSingleTown);
router.post("/deleteTown", town.removeTown);
module.exports = router;
