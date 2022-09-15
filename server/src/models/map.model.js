/**
 * Created by Mb
 */
var mongoose = require("mongoose");
const hardCodedData = require("../hardCodedData");
var Schema = mongoose.Schema;
mapSchema = new Schema(
  {
    town: { type: Schema.Types.ObjectId, ref: "Town" },
    image: {
      type: String,
      default:
        "https://remapconsulting.com/wp-content/uploads/2018/03/Image-placeholder-man.jpg",
    },
    gallery: [
      {
        type: String,
        default:
          "https://remapconsulting.com/wp-content/uploads/2018/03/Image-placeholder-man.jpg",
      },
    ],
    isActive: {
      type: Boolean,
      default: true,
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

module.exports = mongoose.model("Map", mapSchema);
