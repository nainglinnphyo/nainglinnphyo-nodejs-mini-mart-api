import { createCategory, getCategory } from "../controller/category"
const router = require('express').Router()

router.get('/',getCategory)
router.post('/',createCategory)

export default router