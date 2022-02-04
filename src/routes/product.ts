import { createProduct, deleteProduct, editProduct, getProduct } from "../controller/product"
const router = require('express').Router()

router.get('/',getProduct)
router.post('/',createProduct)
router.put('/edit/:id',editProduct)
router.delete('/edit/:id',deleteProduct)

export default router