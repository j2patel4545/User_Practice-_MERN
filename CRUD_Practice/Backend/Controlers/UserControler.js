import User from '../Modules/UserModule.js'

export const  DltUser = async(req,res)=>{
        const{id} = req.params;
        try {
            const DeletedUser = await User.findByIdAndDelete(id);
            if(DeletedUser){
                return res.status(200).json({message:'user deleted Succes',DeletedUser});
            }
            else{
                return res.status(400).json({message:'User Not Found..!'});
            }
        } catch (error) {
            res.status(500).json({message:'Server Error User Delation Timing..!'});
        }
}
export const UpdateUser = async(req,res)=>{
    const{id}= req.params;
    const{firstName,lastName,email} = req.body;
    try {
        const updatedUser = await User.findByIdAndUpdate(id,{firstName,lastName,email});
        if(!updatedUser){
            return res.status(400).json({message:'User Not Found ...opps Does Not Updated.'})
        }
        res.status(200).json({message:'user Updated',updatedUser})
    } catch (error) {
        res.status(500).json({message:'Update Server Error'})

    }
}