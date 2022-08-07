const mongoose = require("mongoose")

const Schema = mongoose.Schema
const SaleAgentSchema = Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required:[true, "userId is required"]
    },
    designation: {
        type: String,
        required: [true,"Designation is required"]
    },
    contact: {
        type: String,
        required:  [true,"Contact is required"],
    },
    about: {
        type: String,
        required: [true,"About is required"]
    }
})

module.exports = mongoose.model("sale-agent", SaleAgentSchema)