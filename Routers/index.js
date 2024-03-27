const express = require("express")

const router = express.Router()

const authRoute = require("./auth")
const storyRoute = require("./story")
const userRoute = require("./user")
const commentRoute = require("./comment")
const sitemapRoute = require('./sitemapRouter')
const searchSuggestionRoute = require('./searchSuggestions')

router.use("/auth",authRoute)
router.use("/story",storyRoute)
router.use("/user",userRoute)
router.use("/comment",commentRoute)
router.use("/", sitemapRoute)
router.use("/search", searchSuggestionRoute)


module.exports = router