/**
 * Created by Mb
 */

//import mongoose and models
var mongoose = require("mongoose");
var AC = mongoose.model("AC");
var DBModal = require("../../models/market.rates.model");
const jwtHelper = require("../../helpers/jwt.helper");
var seedrandom = require("seedrandom");
var crypto = require("crypto");
//async for async tasks
const clientHelper = require("../../helpers/users.helper");
//helper functions
const responseHelper = require("../../helpers/response.helper");
// const { uploadFile } = require("../../helpers/aws");

var DBModalName = "Market Rates";

//@route    POST add
//@desc    update add
//@access   Priv
var addMethod = async (req, res) => {
  try {
    // const name = clientHelper.getRandomName(req.files.townImage);
    // uploadFile(req.files.townImage, name.directory);
    const { id } = req.token_decoded;
    var data = {
      ...req.body,
      createdBy: id,
    };
    const newData = await DBModal.create(data);

    var message = DBModalName + " Created successfully";
    var responseData = { data: newData };
    return responseHelper.success(res, responseData, message);
  } catch (error) {
    responseHelper.requestfailure(res, error);
  }
};

//@route    POST update
//@desc    update
//@access   Priv

var updateMethod = async (req, res) => {
  try {
    const getData = await DBModal.findById(req.body._id);
    let updateData = req.body;

    if (getData) {
      delete req.body._id;
      const updatedData = await DBModal.findByIdAndUpdate(
        getData._id,
        updateData,
        {
          new: true,
        }
      );
      if (updatedData) {
        var message = DBModalName + " Update Successfully";
        var responseData = { data: updatedData };
        return responseHelper.success(res, responseData, message);
      }
      let err = "Something went wrong while updating " + DBModalName;
      return responseHelper.requestfailure(res, err);
    } else {
      let err = "No " + DBModalName + " Exist";
      return responseHelper.requestfailure(res, err);
    }
  } catch (error) {
    responseHelper.requestfailure(res, error);
  }
};

//@route    GET get
//@desc    Get all current
//@access   Priv

// var getBlogs = async (req, res) => {
//   const { id } = req.token_decoded;
//   try {
//     let query;
//     if (req.query?.isApproved == "pending") {
//       query = { isApproved: req.query.isApproved };
//     } else if (req.query?.isApproved) {
//       query = { isApproved: req.query.isApproved, createdBy: id };
//     } else {
//       query = { createdBy: id };
//     }
//     const Blogs = await Blog.find(query)
//       .populate("createdBy")
//       .sort({ created_at: -1 });
//     if (Blogs) {
//       var message = "Blogs Loaded";
//       var responseData = { Blogs: Blogs };
//       return responseHelper.success(res, responseData, message);
//     }
//     let err = "No Blog Exist";
//     return responseHelper.requestfailure(res, err);
//   } catch (error) {
//     responseHelper.requestfailure(res, error);
//   }
// };
var getAllMethod = async (req, res) => {
  try {
    const searchQuery = {}
    if (req.query?.isActive === true) {
      searchQuery.isActive = true
    }
    const listData = await DBModal.find(searchQuery)
      .populate("createdBy town")
      .sort({ created_at: -1 });
    if (listData) {
      var message = DBModalName + " Data Loaded";
      var responseData = { data: listData };
      return responseHelper.success(res, responseData, message);
    }
    let err = "No " + DBModalName + " Exist";
    return responseHelper.requestfailure(res, err);
  } catch (error) {
    responseHelper.requestfailure(res, error);
  }
};

//@route    GET getSingle
//@desc    Get single details
//@access   Priv

var getSingleDetailMethod = async (req, res) => {
  try {
    const getData = await DBModal.findById(req.body.id).populate("createdBy");
    if (getData) {
      var message = DBModalName + " Fetch successfully";
      var responseData = { data: getData };
      return responseHelper.success(res, responseData, message);
    } else {
      let err = "No " + DBModalName + " Exist";
      return responseHelper.requestfailure(res, err);
    }
  } catch (error) {
    responseHelper.requestfailure(res, error);
  }
};

//@route    GET remove
//@desc    delete
//@access   Priv

var removeMethod = async (req, res) => {
  try {
    const getData = await DBModal.findById(req.body.id);
    if (getData) {
      const removeData = getData.remove();
      if (removeData) {
        var message = DBModalName + " Deleted Successfully";
        return responseHelper.success(res, message);
      }
      let err = "Something went wrong while deleting " + DBModalName;
      return responseHelper.requestfailure(res, err);
    }
  } catch (error) {
    responseHelper.requestfailure(res, error);
  }
};

module.exports = {
  addMethod,
  updateMethod,
  getAllMethod,
  getSingleDetailMethod,
  removeMethod,
};
