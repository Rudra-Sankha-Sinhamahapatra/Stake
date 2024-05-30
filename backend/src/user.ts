import express from "express"
import zod from "zod"
const app=express();
const userRouter=express.Router();

const signUpBody=zod.object({
    username:zod.string().email(),
    password:zod.string()
})


app.post("/signup",async(req,res)=>{
    const {success}=signUpBody.safeParse(req.body);

    if(!success){
        return res.status(400).json({
            message:"Incorrect Inputs"
        })
    }

    res.json({
        message:"Signed Up"
    })
})

const signInBody=zod.object({
    username:zod.string().email(),
    password:zod.string()
})


app.post("/signin",async(req,res)=>{
    const {success}=signInBody.safeParse(req.body);

    if(!success){
        return res.status(400).json({
            message:"Incorrect Inputs"
        })
    }

    res.json({
        message:"Signed in"
    })
})


export default userRouter;