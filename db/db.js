import mongoose from "mongoose"



const connectionDB = async() => {
    try {
         const connectDB =  await mongoose.connect(process.env.MONGOBDB_URL) 

       console.log(`MONGOBD connect successfully ${connectDB.connection.host}`);

    } catch (error) {
        console.log('MONGODB connection failed');
    }
}


export default connectionDB