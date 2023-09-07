//external import
const express = require("express")
const router = express.Router()

//internal import
const {getUser} = require("../controller/usersController")
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse")

router.get("/", decorateHtmlResponse("All Users"), getUser)

module.exports = router