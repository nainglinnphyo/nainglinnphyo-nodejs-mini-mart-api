const router = require('express').Router()
import {deleteUser, editUser, getUsers,Login,Register} from '../controller/user'

router.get("/",getUsers)
router.post("/register",Register)
router.post("/login",Login)
router.delete("/delete/:id",deleteUser)
router.put("/edit/:id", editUser)

export default router