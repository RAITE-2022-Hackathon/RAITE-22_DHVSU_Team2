const express = require("express")
const router = express.Router()
const POST_CONTROLLER = require("../../controller/post/post")

router.post("/create-post/:id", POST_CONTROLLER.CREATE_POST)
// router.post("/create-user", USER_CONTROLLER.CREATE_USER)
// router.post("/search-user-by-name/:userName", USER_CONTROLLER.SEARCH_USER_BY_NAME)
// router.put("/update-user/:id", USER_CONTROLLER.UPDATE_USER)
// router.delete("/delete-user/:id", USER_CONTROLLER.DELETE_USER)

module.exports = router