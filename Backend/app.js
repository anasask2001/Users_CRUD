import express from "express"
import dotenv from "dotenv"
import users from "./routes/user_route.js"
import { errorHandler } from "./middleware/error.js"
dotenv.config()
const app = express()
app.use(express.json());
app.use("/api",users)
app.use(errorHandler)


export default app