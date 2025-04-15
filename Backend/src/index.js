import express from "express";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import dotenv from "dotenv";
import cors from "cors";
import {connectDB} from "./lib/db.js";
import cookieParser from "cookie-parser";
import {app,server} from "./lib/socket.js";
import path from "path";
dotenv.config();
const __dirname=path.resolve();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use("/api/auth",authRoutes);  
app.use("/api/messages",messageRoutes); 

if(process.env.NODE_ENV==="production"){
    // app.use(express.static(path.join(__dirname,"../Frontend/Chat/dist")));
    app.use(express.static(path.join(__dirname,"Frontend","Chat","dist")));

    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname,"Frontend","Chat","dist","index.html"));
    }) 
}


const PORT=process.env.PORT;

// app.use(express.json());

server.listen(PORT,()=>{
    console.log("Server is running on PORT:"+PORT);
    connectDB();
})  