const express = require("express")
const router = express.Router()
const PRODUCT_CONTROLLER = require("../../controller/product/product")
const fileStorageEngine = require("../../middleware/upload")
const multer = require("multer")



const upload = multer({storage: fileStorageEngine})

router.post("/add-product", upload.single('image'), PRODUCT_CONTROLLER.ADD_PRODUCT)
router.post("/search-product-by-name/:productName", PRODUCT_CONTROLLER.SEARCH_PRODUCT_BY_NAME)
router.put("/update-product/:id", PRODUCT_CONTROLLER.UPDATE_PRODUCT)
router.delete("/delete-product/:id", PRODUCT_CONTROLLER.DELETE_PRODUCT)
router.get("/get-all-product", PRODUCT_CONTROLLER.GET_ALL_PRODUCT)

module.exports = router