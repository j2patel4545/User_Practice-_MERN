import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser';
import UserRouer from './Routers/UserRouer.js' 

import {DatabaseConnection} from './Database/DB.js'

const PORT = 4500;
const app = express();
DatabaseConnection();

app.use(cors())
app.use(bodyParser.json())

app.use("/user",UserRouer)

app.get("/",(req,res)=>{
    res.send("Server is running Successfully")
})

app.listen(PORT,()=>{
    console.log(`Server is Running on port: http://localhost:${PORT}`);
    
})