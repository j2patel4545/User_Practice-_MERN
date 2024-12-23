import {UserRegister,LoginUser,GetUsers} from '../Controlers/AuthControler.js'
import {DltUser,UpdateUser} from '../Controlers/UserControler.js'
import express from 'express'
const router = express.Router()

router.post("/register",UserRegister);
router.post("/login",LoginUser)
router.get("/users",GetUsers)

router.delete("/dlt/:id",DltUser);
router.put("/upd/:id",UpdateUser)

export default router