/**
 * Created by Mb
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const constants = require("../hardCodedData").constants;
userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      default: "",
    },
    profile: {
      type: String,
      default:
        "https://remapconsulting.com/wp-content/uploads/2018/03/Image-placeholder-man.jpg",
    },
    designation: {
      type: String,
      default: "",
    },
    role: {
      type: String,
      enum: constants.roles,
      default: "user",
    },
    forgotPinCode: {
      type: String,
      default: "",
    },
    phone: {
      type: String,
      default: "",
    },
    address: {
      type: String,
      default: "",
    },
    city: {
      type: String,
      default: "",
    },
    idCard: {
      type: String,
      default: "",
    },
    gender: {
      type: String,
      enum: constants.gender,
      default: "male",
    },
    changePassword: { type: Boolean, default: true },
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = mongoose.model("User", userSchema);
