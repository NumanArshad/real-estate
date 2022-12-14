/**
 * Created by Mb
 */

//import mongoose and models
var mongoose = require("mongoose");
var AC = mongoose.model("AC");
var Town = require("../../models/town.model");
const jwtHelper = require("../../helpers/jwt.helper");
var seedrandom = require("seedrandom");
var crypto = require("crypto");
//async for async tasks
const clientHelper = require("../../helpers/users.helper");
//helper functions
const responseHelper = require("../../helpers/response.helper");
// const { uploadFile } = require("../../helpers/aws");

//@route    POST addTown
//@desc    Add new Town
//@access   Priv

var addNewTown = async (req, res) => {
  try {
    // const name = clientHelper.getRandomName(req.files.townImage);
    // uploadFile(req.files.townImage, name.directory);
    const { id } = req.token_decoded;
    var data = {
      ...req.body,
      createdBy: id,
      townInformation: { gallery: req.imagesUrl }

    };
    const newTown = await Town.create(data);

    var message = "Town Created successfully";
    var responseData = { data: newTown };
    return responseHelper.success(res, responseData, message);
  } catch (error) {
    responseHelper.requestfailure(res, error);
  }
};

//@route    POST updateTown
//@desc    update existing Town
//@access   Priv

var updateTown = async (req, res) => {
  try {
    //console.log("sss->", req.body);
    const getData = await Town.findById(req.body.id);
    console.log("ssss", getData);
    let updateData = req.body;

    if (getData) {
      delete req.body.id;
      const updatedData = await Town.findByIdAndUpdate(
        getData._id,
        updateData,
        {
          new: true,
        }
      );
      if (updatedData) {
        var message = "Town Update Successfully";
        var responseData = { data: updatedData };
        return responseHelper.success(res, responseData, message);
      }
      let err = "Something went wrong while updating Town";
      return responseHelper.requestfailure(res, err);
    } else {
      let err = "No Town Exist";
      return responseHelper.requestfailure(res, err);
    }
  } catch (error) {
    responseHelper.requestfailure(res, error);
  }
};

//@route    GET get Town
//@desc    Get all current  Town
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
var getAllTown = async (req, res) => {
  try {
    const listData = await Town.find({ isActive: true })
      .populate("createdBy")
      .sort({ created_at: -1 });
    if (listData) {
      var message = "Town Data Loaded";
      var responseData = { data: listData };
      return responseHelper.success(res, responseData, message);
    }
    let err = "No Town Exist";
    return responseHelper.requestfailure(res, err);
  } catch (error) {
    responseHelper.requestfailure(res, error);
  }
};

//@route    GET getSingleTown
//@desc    Get single  town details
//@access   Priv

var getSingleTown = async (req, res) => {
  try {
    const getData = await Town.findById(req.body.id).populate("createdBy");
    if (getData) {
      var message = "Town Fetch successfully";
      var responseData = { Town: getData };
      return responseHelper.success(res, responseData, message);
    } else {
      let err = "No Town Exist";
      return responseHelper.requestfailure(res, err);
    }
  } catch (error) {
    responseHelper.requestfailure(res, error);
  }
};

//@route    GET removeTown
//@desc    delete blog data
//@access   Priv

var removeTown = async (req, res) => {
  try {
    const getData = await Town.findById(req.body.id);
    if (getData) {
      const removeData = getData.remove();
      if (removeData) {
        var message = "Town Deleted Successfully";
        return responseHelper.success(res, message);
      }
      let err = "Something went wrong while deleting Town";
      return responseHelper.requestfailure(res, err);
    }
  } catch (error) {
    responseHelper.requestfailure(res, error);
  }
};



//////Public API Method///////////


const getAllActiveTownConstructionUpdate = async (req, res) => {
  try {
    const listData = await Town.find({ isActive: true, isOnConstruction: true })
      .populate("createdBy", { first_name: 1, last_name: 1 })
      .sort({ created_at: -1 });
    if (listData) {
      var message = "Construction Updates Loaded";
      // var responseData = { data: listData };
      return responseHelper.success(res, listData, message);
    }
    let err = "No Town Exist";
    return responseHelper.requestfailure(res, err);
  } catch (error) {
    responseHelper.requestfailure(res, error);
  }
}

module.exports = {
  addNewTown,
  updateTown,
  getSingleTown,
  removeTown,
  getAllTown,

  getAllActiveTownConstructionUpdate
};
