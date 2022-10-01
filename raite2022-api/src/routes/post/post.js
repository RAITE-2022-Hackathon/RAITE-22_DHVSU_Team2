const express = require("express")
const router = express.Router()
const POST_CONTROLLER = require("../../controller/post/post")

router.post("/create-post", POST_CONTROLLER.CREATE_POST)
router.get("/get-all-post-from-user/:id", POST_CONTROLLER.GET_ALL_POST_FROM_USER)
router.put("/update-post/:id", POST_CONTROLLER.UPDATE_POST)
router.delete("/delete-post/:id", POST_CONTROLLER.DELETE_POST)
router.get("/get-all-post", POST_CONTROLLER.GET_ALL_POST)

module.exports = router