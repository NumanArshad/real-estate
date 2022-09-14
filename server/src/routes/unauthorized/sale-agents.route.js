const { saleAgentByIdWithPropertyReviewList, getAllActiveSaleAgents, getSingleUser } = require("../../controllers").user

const router = require("express").Router()

router.get("/saleAgentAndPropertiesReviewsList/:id", saleAgentByIdWithPropertyReviewList)
router.get("/activeSaleAgents", getAllActiveSaleAgents)
router.get("/saleAgentById/:id", getSingleUser)
module.exports = router