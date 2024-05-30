import express from "express"
import cors from 'cors'
import  userRouter from "./user"

const PORT=3000;
const app=express();
app.use(cors());
app.use("/user",userRouter);

app.use(express.json());
const router=express.Router();



app.listen(PORT,()=>{
    console.log(`Server Running on Port ${PORT}`);
})
