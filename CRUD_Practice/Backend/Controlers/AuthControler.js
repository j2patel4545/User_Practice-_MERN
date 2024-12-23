import User from '../Modules/UserModule.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const UserRegister = async (req,res)=>{
    const{firstName,lastName,email,password} = req.body
    try {
        const existingUser = await User.findOne({ email })
        if(existingUser){
            return res.status(400).json({message:'User is Already Exist..!'})
        }
        const hashedpassword = await bcrypt.hash(password,10)

        const newUser = new User({
            firstName,
            lastName,
            email,
            password:hashedpassword
            
        })
        await newUser.save();
        res.status(200).json({message:'User Register Success..!'});
    } catch (error) {
        res.status(500).json({message:'User Register Server Error..!'})
    }
}

export const LoginUser =  async(req,res)=>{
        const{email,password} = req.body;
        try {
            const user = await User.findOne({ email })
            if(!user){
                return res.status(400).json({message:'User is Invalide2..!'})
            } 

            const isMatch = await bcrypt.compare(password, user.password)
            if(!isMatch){
                return res.status(400).json({message:'Password Incurrect'});
            }
            const token = jwt.sign({id:user._id},'10',{expiresIn:'1h'})
            res.status(200).json({message:'Success',token,user})
        } catch (error) {
            res.status(400).json({message:'Login Server Error..!'})
        }
}
export const k = async(req,res)=>{
    const{email,password}= req.body
    try {
        const user = await User.findOne({ email })
        if(!user){
            return res.status(400).json({message:'User is Invalid'})
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.status(400).json({message:'Password is InvalidatedProjectKind..!'})
        }
        const token = jwt.sign({id:user._id},'10',{expiresIn:'1h'})
        res.status(200).json({message:'Login Success',user})
    } catch (error) {
        res.status(500).json({message:'Login Server Error'})
    }
}

export const GetUsers = async (req,res)=>{
    try {
        const user = await User.find();
        res.status(200).json(user) 
    } catch (error) {
        res.status(400).json("Data not Fateched")
    }
}