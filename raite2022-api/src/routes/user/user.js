const express = require("express")
const router = express.Router()
const USER_CONTROLLER = require("../../controller/user/user")

router.post("/log-in", USER_CONTROLLER.LOG_IN)
router.post("/create-user", USER_CONTROLLER.CREATE_USER)
router.post("/search-user-by-name/:userName", USER_CONTROLLER.SEARCH_USER_BY_NAME)
router.put("/update-user/:id", USER_CONTROLLER.UPDATE_USER)
router.delete("/delete-user/:id", USER_CONTROLLER.DELETE_USER)
router.post("/follow/:id/:userName", USER_CONTROLLER.FOLLOW_USER)
router.post("/unfollow/:id/:userName", USER_CONTROLLER.UNFOLLOW_USER)
router.post("/add-coin-to-watchlist", USER_CONTROLLER.ADD_COIN_TO_WATCHLIST)
router.get("/get-watchlist/:id", USER_CONTROLLER.GET_WATCH_LIST)


module.exports = router