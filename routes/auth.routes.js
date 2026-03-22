// import express from "express"
// import {googleAuth, logOut} from "../controllers/auth.controller.js"

// const authRouter = express.Router()

// authRouter.post("/google", googleAuth)
// authRouter.post("/logOut", logOut)

// export default authRouter


import express from "express"
import { googleAuth, logOut } from "../controllers/auth.controller.js"

const authRouter = express.Router()

authRouter.post("/google", googleAuth)
authRouter.get("/logout", logOut)

export default authRouter