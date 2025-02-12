import express from "express"
import {getProducts, deleteProduct, addProduct, updateProduct} from "../controllers/product.controller.js"

const router = express.Router()

router.post("/", addProduct);

router.delete("/:id", deleteProduct);

router.get("/", getProducts)

router.put("/:id", updateProduct)

export default router