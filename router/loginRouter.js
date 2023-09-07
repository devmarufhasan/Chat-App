//external import
const express = require("express")
const router = express.Router()

//internal import
const {getLogin} = require("../controller/loginController")
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse")

//log-in page
router.get("/", decorateHtmlResponse("Login"),getLogin)

module.exports = router