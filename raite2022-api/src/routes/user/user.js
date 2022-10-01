const express = require("express")
const router = express.Router()
const USER_CONTROLLER = require("../../controller/user/user")

router.post("/create-user", USER_CONTROLLER.ADD_USER)
router.post("/search-user-by-name/:userName", USER_CONTROLLER.SEARCH_USER_BY_NAME)
router.put("/update-user/:id", USER_CONTROLLER.UPDATE_USER)
router.delete("/delete-user/:id", USER_CONTROLLER.DELETE_USER)

module.exports = router