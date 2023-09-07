//external import
const express = require("express")
const router = express.Router()

//internal import
const {getInbox} = require("../controller/inboxController")
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse")

router.get("/", decorateHtmlResponse("All Inboxes"), getInbox)

module.exports = router