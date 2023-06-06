import mongoose from 'mongoose'

mongoDB().catch(err => console.log(err));

export async function mongoDB() {
  try{
    await mongoose.connect(String(process.env.MONGO_DB));
  }
  catch(error){
    console.log(error)
    throw error
  }
  
}

export async function disconnectMongoDB(){
  try{
    await mongoose.disconnect()
  }
  catch(error){
    console.log(error)
    throw error
  }
  
}