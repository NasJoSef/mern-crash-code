import express from "express"
import {getProducts, deleteProduct, addProduct, updateProduct} from "../controllers/product.controller.js"

const router = express.Router()

router.get("/", getProducts)
router.post("/", addProduct);
router.put("/:id", updateProduct)
router.delete("/:id", deleteProduct);

export default router