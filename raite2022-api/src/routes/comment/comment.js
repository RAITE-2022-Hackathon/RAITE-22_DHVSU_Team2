const express = require("express")
const router = express.Router()
const COMMENT_CONTROLLER = require("../../controller/comment/comment")

router.post("/create-comment/:id", COMMENT_CONTROLLER.ADD_COMMENT)
router.put("/update-comment/:id", COMMENT_CONTROLLER.UPDATE_COMMENT)
router.delete("/delete-comment/:id", COMMENT_CONTROLLER.DELETE_COMMENT)


module.exports = router