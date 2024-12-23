import mongoose from "mongoose";

export const DatabaseConnection = async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/Monday1");
        console.log("Database is  Connected");
        
    } catch (error) {
        console.log("Database NOT Connected");
        
        
    }
}