import { createSupplier, getSupplier } from "../controller/supplier"
const router = require('express').Router()

router.get('/',getSupplier)
router.post('/',createSupplier)

export default router