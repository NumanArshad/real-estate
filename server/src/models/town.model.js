/**
 * Created by Mb
 */
var mongoose = require("mongoose");
const hardCodedData = require("../hardCodedData");
var Schema = mongoose.Schema;
townSchema = new Schema(
  {
    block: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    area: {
      type: String,
      default: "",
    },
    city: {
      type: String,
      default: "",
    },
    hasBlock: {
      type: Boolean,
      default: false,
    },
    address: { type: String, default: "" },
    townInformation: {
      name: { type: String, default: "" },
      tagLine: { type: String, default: "" },

      WhyChooseUs: [{ type: String, default: "" }],
      officeAddress: [
        { address: { type: String, default: "" } },
        { phone: { type: String, default: "" } },
        { emailId: { type: String, default: "" } },
      ],
      LocationGuide: [{ type: String, default: "" }],
      AffordablePaymentPlan: [{ type: String, default: "" }],
      paymentPlanImage:
      {
        type: String,
        default:
          "",
      },

      floorPlanImage: {
        type: String,
        default:
          "",
      },


      gallery: [
        {
          type: String,
          default:
            "https://remapconsulting.com/wp-content/uploads/2018/03/Image-placeholder-man.jpg",
        },
      ],
    },
    isOnConstruction: {
      type: Boolean,
      default: false,
    },
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

module.exports = mongoose.model("Town", townSchema);
