import mongoose from 'mongoose';

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

export const connectDB = async ()=>{
    try {
        const MONGO_URL =  process.env.MONGO_URL ?? null;
        if(!MONGO_URL){
            throw new error ("MONGO_URL is not defined.");
        }
        await mongoose.connect(MONGO_URL , clientOptions);
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log("You successfully connected to MongoDB!");
    } catch (error) {
        console.log("Eroor connecting to the mongoDB: ",error);
        process.exit(1); //1 from th eforce exit
    }
}

export const disconnectDB= async ()=>{
    try {
        await mongoose.disconnect();
        console.log("Disconnected from the MongoDB"); 
    } catch (error) {
        console.log("Eroor connecting to the mongoDB: ",error);
        process.exit(1); //1 from th eforce exit
    }
}