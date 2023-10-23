import express, { json } from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config()

 
const app = express()
  
app.use(cors ({
    credentials:true
}));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

 const PORT = process.env.PORT
const server = http.createServer(app)
server.listen(PORT, () => {
    console.log('server is running on ', PORT);
    
})

