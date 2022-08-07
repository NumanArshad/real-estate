const responseHelper = require("../helpers/response.helper")
const { saleAgent } = require("../models")

const registerSaleAgent = (req, res) => {
    const { userId, contact, designation, about } = req.body
    const newSaleAgent = new saleAgent({ userId, contact, designation, about })
    return newSaleAgent.save().then((responseData) => {
        console.log("response succes sale agent is")
        return responseHelper.success(res, responseData, "Sale Agent Created Successfully!")
    }).catch((error) => {
        console.log("sale agent creation failure")
        return responseHelper.requestfailure(res, error)
    })
}

const getAllSaleAgents = (req, res) => {
    saleAgent.find().then((responseData) => {
        console.log("response succes sale agent is")
        return responseHelper.success(res, responseData, "Sale Agent Get Successfully!")
    }).catch((error) => {
        return responseHelper.requestfailure(res, error)
    })
}


const getSaleAgentById = (req, res) => {
    saleAgent.find({ _id: req.params.id }).then((responseData) => {
        console.log("response succes sale agent is")
        return responseHelper.success(res, responseData, "Get Sale Agent Detail Successfully!")
    }).catch((error) => {
        return responseHelper.requestfailure(res, error)
    })
}

module.exports = {
    registerSaleAgent, getAllSaleAgents, getSaleAgentById
}



