import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const URI = process.env.MONGO_URI ?? null;
    if(!URI) {
        throw new Error('MONGO_URI is Missing in environment variables');
    }
    const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
    await mongoose.connect(URI, clientOptions);
    await mongoose.connection.db.command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export const disconnectDB = async () => {
    try {
        await mongoose.disconnect();
        console.log('MongoDB disconnected successfully');
    } catch (error) {
        console.error('MongoDB disconnection error:', error);
        process.exit(1);
    }
};