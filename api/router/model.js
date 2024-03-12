"use strict"

const express = require("express")
const router = express.Router()

const modelController = require("../controllers/model")

// model routes
router.post("/runScraper", modelController.runScraper);
router.get("/test", modelController.runEx);


module.exports = router