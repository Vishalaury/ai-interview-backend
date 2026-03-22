// import express from "express"
// import dotenv from "dotenv"
// import connectDb from "./config/connectDb.js"
// import cookieParser from "cookie-parser"
// import authRouter from "./routes/auth.routes.js"
// dotenv.config()
// import cors from "cors"
// import userRouter from "./routes/user.route.js"
// import interviewRouter from "./routes/interview.route.js"

// const app = express()
// app.use(cors({
//     origin:"http://localhost:5173",
//     credentials: true
// }))

// app.use(express.json())
// app.use(cookieParser())

// app.use("/api/auth", authRouter)
// app.use("/api/user", userRouter)
// app.use("/api/interview", interviewRouter)
// const PORT = process.env.PORT || 6000
// app.listen(PORT, ()=>{
//     console.log(`Server runing on port ${PORT}`);
//     connectDb()
// })




import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDb from "./config/connectDb.js";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.route.js";
import interviewRouter from "./routes/interview.route.js";

const app = express();
app.get("/", (req, res) => {
  res.send("API is running successfully");
});

// CORS
app.use(cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true
}));

// Middlewares
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/interview", interviewRouter);

const PORT = process.env.PORT || 6000;

// Start server
app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`);
    try {
        await connectDb();
    } catch (error) {
        console.error("DB connection failed:", error);
    }
});