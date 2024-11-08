import express from "express"
import { trycatch } from "../middleware/trycatch.js"
import { createuser, deleteuser, getuser, updateuser } from "../controller/user_controller.js"
import validate from "../middleware/validate.js"
import { user_validation } from "../validation/user_validation.js"

const route = express.Router()

route.post("/users",validate(user_validation),trycatch(createuser))
route.get("/users",trycatch(getuser))
route.put("/users/:id",trycatch(updateuser))
route.patch('/users/:id',trycatch(deleteuser))


export default route