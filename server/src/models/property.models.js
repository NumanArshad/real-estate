const mongoose = require("mongoose");
const { constants } = require("../hardCodedData");

const Schema = mongoose.Schema;
const propertySchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        bedRoomCount: {
            type: Number,
            required: true,
        },
        bathRoomCount: {
            type: Number,
            required: true,
        },
        kitchenCount: {
            type: Number,
            required: true,
        },
        carGarage: {
            type: Boolean,
            default: false,
        },

        gasAvailable: {
            type: Boolean,
            default: false,
        },
        electricityAvailable: {
            type: Boolean,
            default: false,
        },
        status: {
            type: String,
            enum: constants.property_status,
            required: true,
        },

        type: {
            type: String,
            enum: constants.property_type,
            required: true,
        },
        saleAgentId: { type: Schema.Types.ObjectId, ref: "User" },
        landArea: {
            type: String,
            required: false,
        },
        marla: {
            type: String,
            required: true,
        },
        area: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        images: [
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
        //townId: {type: Schema.Types.ObjectId, ref: "Town" }
    },
    {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at",
        },
    }
);
propertySchema.index({ "$**": "text" })

module.exports = mongoose.model("property", propertySchema);
