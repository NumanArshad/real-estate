/**
 * Created by Mb
 */
var mongoose = require("mongoose");
const hardCodedData = require("../hardCodedData");
var Schema = mongoose.Schema;
userSchema = new Schema(
  {
    name: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default:
        "https://remapconsulting.com/wp-content/uploads/2018/03/Image-placeholder-man.jpg",
    },
    url: {
      type: String,
      default: "",
    },
    isApproved: {
      type: String,
      default: "pending",
      enum: hardCodedData.constants.blog_status,
    },
    createdBy: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = mongoose.model("Blog", userSchema);
