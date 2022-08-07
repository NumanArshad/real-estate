/**
 * Created by Mb
 */

//import mongoose and models
var mongoose = require("mongoose");
var AC = mongoose.model("AC");
var Blog = require("../../models/blogs.model");
const jwtHelper = require("../../helpers/jwt.helper");
var seedrandom = require("seedrandom");
var crypto = require("crypto");
//async for async tasks
const clientHelper = require("../../helpers/users.helper");
//helper functions
const responseHelper = require("../../helpers/response.helper");
const { removeSingleImageFile } = require("../../helpers/uploadImages.helper");
const blogsModel = require("../../models/blogs.model");
// const { uploadFile } = require("../../helpers/aws");

//@route    POST addBlog
//@desc    Add new blog
//@access   Priv

var addNewBlog = async (req, res) => {
  try {
    // const name = clientHelper.getRandomName(req.files.blogImage);
    // uploadFile(req.files.blogImage, name.directory);
    const { id } = req.token_decoded;
    var data = {
      name: req.body.name,
      description: req.body.description,
      content: req.body.content,
      createdBy: id,
      //   image: name.fileName,
      //   url: "blogImage/" + name.fileName,
      isApproved: req.body.isApproved,
    };
    if (req.imageUrl) {
      data["image"] = req.imageUrl
    }
    const newBlog = await Blog.create(data);

    var message = "Blog Added Created successfully";
    var responseData = { image: newBlog };
    return responseHelper.success(res, responseData, message);
  } catch (error) {
    removeSingleImageFile(req.imageUrl)
    responseHelper.requestfailure(res, error);
  }
};

// //@route    POST uploadImage
// //@desc    update existing blog image
// //@access   Priv

// var uploadBlogImage = async (req, res) => {
//   try {
//     const name = clientHelper.getRandomName(req.files.blogImage);
//     // uploadFile(req.files.blogImage, name.directory);
//     var data = {
//       image: name.fileName,
//       url: "blogImage/" + name.fileName,
//     };
//     var message = "Blog image uploaded successfully";
//     var responseData = { Image: data };
//     return responseHelper.success(res, responseData, message);
//   } catch (error) {
//     responseHelper.requestfailure(res, error);
//   }
// };

//@route    POST updateBlog
//@desc    update existing blog
//@access   Priv

var updateBlog = async (req, res) => {
  try {
    // console.log("sss->", req.body);
    const getBLog = await Blog.findById(req.body.id);
    console.log("ssss", getBLog);
    let updateData = req.body;
    if (req.body?.role !== "admin") {
      updateData["isApproved"] = "pending";
    }
    if (getBLog) {
      delete req.body.id;
      const updateBlog = await Blog.findByIdAndUpdate(getBLog._id, updateData, {
        new: true,
      });
      if (updateBlog) {
        var message = "Blog Update Successfully";
        var responseData = { BlogData: updateBlog };
        return responseHelper.success(res, responseData, message);
      }
      let err = "Something went wrong while updating blog";
      return responseHelper.requestfailure(res, err);
    } else {
      let err = "No Blog Exist";
      return responseHelper.requestfailure(res, err);
    }
  } catch (error) {
    responseHelper.requestfailure(res, error);
  }
};

//@route    GET getBlogs
//@desc    Get all current  blog
//@access   Priv

var getBlogs = async (req, res) => {
  const { id } = req.token_decoded;
  try {
    let query;
    if (req.query?.isApproved == "pending") {
      query = { isApproved: req.query.isApproved };
    } else if (req.query?.isApproved) {
      query = { isApproved: req.query.isApproved, createdBy: id };
    } else {
      query = { createdBy: id };
    }
    const Blogs = await Blog.find(query)
      .populate("createdBy")
      .sort({ created_at: -1 });
    if (Blogs) {
      var message = "Blogs Loaded";
      var responseData = { Blogs: Blogs };
      return responseHelper.success(res, responseData, message);
    }
    let err = "No Blog Exist";
    return responseHelper.requestfailure(res, err);
  } catch (error) {
    responseHelper.requestfailure(res, error);
  }
};
var getAllBlogs = async (req, res) => {
  try {
    const Blogs = await Blog.find({ isApproved: "approved" })
      .populate("createdBy")
      .sort({ created_at: -1 });
    if (Blogs) {
      var message = "Blogs Loaded";
      var responseData = { Blogs: Blogs };
      return responseHelper.success(res, responseData, message);
    }
    let err = "No Blog Exist";
    return responseHelper.requestfailure(res, err);
  } catch (error) {
    responseHelper.requestfailure(res, error);
  }
};




//@route    GET getSingleBlog
//@desc    Get single  blog details
//@access   Priv

var getSingleBlog = async (req, res) => {
  try {
    const getBLog = await Blog.findById(req.body.id).populate("createdBy");
    if (getBLog) {
      var message = "Blog Fetch successfully";
      var responseData = { Blog: getBLog };
      return responseHelper.success(res, responseData, message);
    } else {
      let err = "No Blog Exist";
      return responseHelper.requestfailure(res, err);
    }
  } catch (error) {
    responseHelper.requestfailure(res, error);
  }
};

//@route    GET removeBlog
//@desc    delete blog data
//@access   Priv

var removeBlog = async (req, res) => {
  try {
    const BlogF = await Blog.findById(req.body.id);
    if (BlogF) {
      const removeBlog = BlogF.remove();
      if (removeBlog) {
        var message = "BLog Deleted Successfully";
        return responseHelper.success(res, message);
      }
      let err = "Something went wrong while deleting Blog";
      return responseHelper.requestfailure(res, err);
    }
  } catch (error) {
    responseHelper.requestfailure(res, error);
  }
};

var filterBlog = async (req, res) => {
  try {
    const key = req.body.type;
    console.log(key);

    let query;
    if (key == "desc") {
      query = { created_at: -1 };
    } else if (key == "asc") {
      query = { created_at: 1 };
    } else if (key == "all") {
      query = {};
    }
    const BlogF = await Blog.find({ isApproved: "approved" }).sort(query);
    if (BlogF) {
      var responseData = { Blogs: BlogF };
      var message = "Blogs Loaded";
      return responseHelper.success(res, responseData, message);
    }
    let err = "No Blog Exist";
    return responseHelper.requestfailure(res, err);
  } catch (error) {
    responseHelper.requestfailure(res, error);
  }
};


//////////////////Public Api Method ///////////////////////

const getApprovedBlogsByFilter = async (req) => {
  try {
    return await blogsModel.find({ isApproved: "approved" }).sort({ created_at: -1 })
  }
  catch (error) {
    // responseHelper.requestfailure(res, error);
    throw new Error(error)
  }
}

module.exports = {
  addNewBlog,
  updateBlog,
  getBlogs,
  getSingleBlog,
  removeBlog,
  getAllBlogs,
  filterBlog,

  ///public
  getApprovedBlogsByFilter
};
