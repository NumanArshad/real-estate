/**
 * Created by Mb
 */

const express = require("express");
const router = express.Router();
// var permit = require("../../middlewares").permit;

//controller
const blog = require("../../controllers/admin/blogs.controller");
const { uploadSingleFile } = require("../../helpers/uploadImages.helper");

//uploader
// var multer = require("multer");
// var storage = multer.diskStorage({});
// var upload = multer({ storage: storage });

//blog
//  router.post("/addBlog",permit('admin designer'),upload.fields([{ name: 'blogImage', maxCount: 1 }]), blog.addNewBlog);
router.post("/addBlog", uploadSingleFile, blog.addNewBlog);
//  router.post("/uploadImage",upload.fields([{ name: 'blogImage', maxCount: 1 }]), blog.uploadBlogImage);
router.get("/getBlogs", blog.getBlogs);
router.get("/getAllBlogs", blog.getAllBlogs);
router.post("/updateBlog", uploadSingleFile, blog.updateBlog);
router.get("/getSingleBlog", blog.getSingleBlog);
router.post("/deleteBlog", blog.removeBlog);
module.exports = router;
