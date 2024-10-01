import mongoose from "mongoose";
import colors from "colors";
const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb://0.0.0.0:27017/ecommerce");
        console.log(`Connect To Mongodb Database ${conn.connection.host}`.bgMagenta.white);
    } catch(error){
        console.log(`Error in Mongodb ${error}`.bgRed.white)
    }
};

export default connectDB