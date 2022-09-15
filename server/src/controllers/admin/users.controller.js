const { users: User, property: propertyModels } = require("../../models")
const responseHelper = require("../../helpers/response.helper");
const { getHashValue } = require("../../helpers/users.helper");
const { removeSingleImageFile } = require("../../helpers/uploadImages.helper");
const { paginationProps } = require("../../helpers/pagination.helper");

var getAllUser = async (req, res) => {
  try {
    var limit = parseInt(req.body.limit) || 10;
    var page = req.params.page ? parseInt(req.params.page) : 1;
    var skip = (page - 1) * limit;
    const user = await User.find({
      $or: [
        { isDeleted: false, role: "user" },
        { isDeleted: false, role: "saleagent" },
      ],
    })
      .skip(skip)
      .limit(limit)
      .sort({ created_at: -1 });
    const total = await User.find({
      $or: [
        { isDeleted: false, role: "user" },
        { isDeleted: false, role: "saleagent" },
      ],
    }).countDocuments();
    if (user) {
      var message = "Success";
      var responseData = { response: user, total };
      return responseHelper.success(res, responseData, message);
    } else {
      let err = "No User found";
      return responseHelper.requestfailure(res, err);
    }
  } catch (error) {
    responseHelper.requestfailure(res, error);
  }
};

var getSingleUser = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Parms", req.params);
    const user = await User.findById(id);
    delete user.password;
    if (user) {
      var message = "User Loaded";
      var responseData = { user: user };
      return responseHelper.success(res, responseData, message);
    }
    let err = "Sorry Your Profile Not Exist";
    return responseHelper.requestfailure(res, err);
  } catch (err) {
    return responseHelper.requestfailure(res, err);
  }
};

var updateUser = async (req, res) => {
  try {
    const { _id: userId } = req.body;

    const user = await User.findById(userId);
    if (user) {
      let bodyData = req.body;
      delete bodyData.userId;
      if (req.imageUrl) //delete image
      {
        console.log("updating image", bodyData.profile, req.imageUrl)
        removeSingleImageFile(bodyData.profile)
        bodyData.profile = req.imageUrl

      }


      const updatedUser = await User.findByIdAndUpdate(
        { _id: userId },
        bodyData,
        { new: true }
      );
      var message = "User Updated successfully";
      // const updatedUser = await User.findById(userId);
      var responseData = { response: updatedUser };
      return responseHelper.success(res, responseData, message);
    } else {
      let err = "User not found";
      return responseHelper.requestfailure(res, err);
    }
  } catch (error) {
    responseHelper.requestfailure(res, error);
  }
};

var createUser = async (req, res) => {
  const { first_name, username, phone_number, email, password } = req.body;
  try {
    if (email == "" || email == undefined) {
      let err = "email is required";
      removeSingleImageFile(req.imageUrl)

      return responseHelper.requestfailure(res, err);
    }
    if (password == "" || password == undefined) {
      let err = "Password is required";
      removeSingleImageFile(req.imageUrl)

      return responseHelper.requestfailure(res, err);
    }

    if (first_name == "" || first_name == undefined) {
      let err = "First name is required";
      removeSingleImageFile(req.imageUrl)

      return responseHelper.requestfailure(res, err);
    }

    const checkemail = await User.findOne({ email: email });
    //   if (req.files) {
    //     // uploadImage(req, res);
    //     const profileName = await uploadImage(req, res);
    //     bodyData["profile"] = profileName?.fileName;
    //     // bodyData["profile"] = req.files.profile[0].originalname;
    //   }
    if (checkemail) {
      let err = "Email already exists";
      removeSingleImageFile(req.imageUrl)

      return responseHelper.requestfailure(res, err);
    }
    let bodyData = req.body;

    const hashpassword = await getHashValue(password);
    bodyData["password"] = hashpassword;
    if (req.imageUrl) {
      bodyData["profile"] = req.imageUrl
    }
    const newuser = await User.create(bodyData);
    if (newuser) {
      var message = "Account Created successfully";
      var responseData = { user: newuser };
      return responseHelper.success(res, responseData, message);
    }
  } catch (error) {
    removeSingleImageFile(req.imageUrl)

    responseHelper.requestfailure(res, error);
  }
};

const activateInActiveUser = async (req, res) => {
  try {
    const modifiedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      useFindAndModify: false,
    });
    console.log({ modifiedUser });
    return responseHelper.success(
      res,
      modifiedUser,
      `User ${req.body.isActivated} successfully!`
    );
  } catch (err) {
    console.log(
      "user active inactive update failure due to error",
      err.message
    );
    return responseHelper.requestfailure(res, err);
  }
};


////////////////////Public API ////////////////////////////////

const getAllActiveSaleAgents = async (req, res) => {
  try {

    const responseData = await getActiveSaleAgents(req)

    if (responseData?.user) {
      var message = "Success";
      return responseHelper.success(res, responseData, message);
    } else {
      let err = "No User found";
      return responseHelper.requestfailure(res, err);
    }
  } catch (error) {
    responseHelper.requestfailure(res, error);
  }
}

const getTopThreeActiveSaleAgents = async (req) => {
  try {
    req.query.limit = 4;
    const responseData = await getActiveSaleAgents(req)

    if (responseData?.user) {
      return responseData?.user;
    } else {
      return []
    }
  } catch (error) {
    console.log("error")
    throw new Error(error)
  }
}

const getActiveSaleAgents = async (req) => {
  try {
    const { skip, limit } = paginationProps(req)

    console.log({ skip, limit })

    const searchQuery = { isActive: true, role: "saleagent" }
    if (req.query?.text) {
      searchQuery["$text"] = { $search: req.query?.text }
    }
    if (req.query?.city) {
      searchQuery["$or"] = [{ city: req.query?.city }]
    }

    const isAll = req.query?.all

    console.log({ isAll })
    const user = isAll ? await User.find(searchQuery, { forgotPinCode: 0, password: 0 }).sort({ created_at: -1 })
      .sort({ created_at: -1 }) : await User.find(searchQuery, { forgotPinCode: 0, password: 0 }).skip(skip).limit(limit).sort({ created_at: -1 })
        .sort({ created_at: -1 });

    const total = await User.find(searchQuery).countDocuments();

    if (user) {
      // var message = "Success";
      // var responseData = { response: user, total };
      // return responseHelper.success(res, responseData, message);
      return { user, total }
    } else {
      // let err = "No User found";
      return null //responseHelper.requestfailure(res, err);
    }
  } catch (error) {
    //responseHelper.requestfailure(res, error);

    throw new Error(error)
  }
}

// ///properties list on sale agent detail in public api
// const propertiesBySaleAgentId = async (saleAgentId) => {
//   try {
//     const properties = await propertyModel.find(
//       { saleAgentId },
//     );
//     return properties
//   }
//   catch (error) {
//     throw new Error(error)
//   }
// }

const saleAgentByIdWithPropertyReviewList = async (req, res) => {
  try {
    const saleAgent = await User.findById(req.params?.id)
    const propertiesListBySaleAgentId = await propertyModels.find(req.params?.id)
    if (saleAgent) {
      var message = "Success";
      var responseData = { saleAgent, properties: propertiesListBySaleAgentId };
      return responseHelper.success(res, responseData, message);
    } else {
      let err = "No User found";
      return responseHelper.requestfailure(res, err);
    }
  } catch (error) {
    responseHelper.requestfailure(res, error);
  }
}

module.exports = {
  getSingleUser,
  getAllUser,
  updateUser,
  createUser,
  activateInActiveUser,

  //
  getAllActiveSaleAgents,
  saleAgentByIdWithPropertyReviewList,
  getTopThreeActiveSaleAgents
};
