/**
 * Created by Mb
 */

const express = require("express");
const router = express.Router();
const { forgotJwtAuth } = require("../../helpers/jwt.helper");
const { uploadSingleFile } = require("../../helpers/uploadImages.helper");
const { AS, login, signup, sentForgotPinCodeViaEmail, verifyForgotPinCode, resetPassword } = require("../../controllers").auth;
router.get("/as", AS);
//@route    POST auth/login
//@desc     login user
//@access   Public
router.post("/login", login);
//@route    POST auth/signup
//@desc     Sign up user (create user account)
//@access   Public
router.post("/signup", uploadSingleFile, signup);

//@route    POST auth/forgotemail
//@desc     sent email to user for fotgot password
//@access   Public
router.post("/forgotemail", sentForgotPinCodeViaEmail);

//@route    POST auth/verifyforgotpin
//@desc     verify pin code in db
//@access   private
router.post("/verifyforgotpin", forgotJwtAuth, verifyForgotPinCode);

//@route    POST auth/resetpassword
//@desc     reset password
//@access   private
router.post("/resetpassword", forgotJwtAuth, resetPassword);

module.exports = router;
