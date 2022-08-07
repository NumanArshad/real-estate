const { saleAgentByIdWithPropertyReviewList, getAllActiveSaleAgents } = require("../../controllers").user

const router = require("express").Router()

router.get("/saleAgentAndPropertiesReviewsList/:id", saleAgentByIdWithPropertyReviewList)
router.get("/activeSaleAgents", getAllActiveSaleAgents)
module.exports = router