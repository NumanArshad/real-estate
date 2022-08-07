const { getAllSaleAgents, registerSaleAgent, getSaleAgentById } = require("../../controllers").user

const express = require("express")

const router = express.Router()
router.get("/", getAllSaleAgents)
router.post("/", registerSaleAgent)
router.get("/:id", getSaleAgentById)

module.exports = router