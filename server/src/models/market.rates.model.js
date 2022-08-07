/**
 * Created by Mb
 */
var mongoose = require("mongoose");
const hardCodedData = require("../hardCodedData");
var Schema = mongoose.Schema;
marketRatesSchema = new Schema(
  {
    town: { type: Schema.Types.ObjectId, ref: "Town" },
    plot: [
      {
        type: {
          type: String,
          default: "",
        },
        priceFrom: {
          type: Number,
          default: "",
        },
        priceTo: {
          type: Number,
          default: "",
        },
      },
    ],
    isActive: {
      type: String,
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

module.exports = mongoose.model("MarketRates", marketRatesSchema);
