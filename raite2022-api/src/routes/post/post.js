const express = require("express")
const router = express.Router()
const POST_CONTROLLER = require("../../controller/post/post")

router.post("/create-post", POST_CONTROLLER.CREATE_POST)
router.get("/get-all-post", POST_CONTROLLER.GET_ALL_POST)
router.put("/update-post", POST_CONTROLLER.UPDATE_POST)
router.delete("/delete-post", POST_CONTROLLER.DELETE_POST)


module.exports = router