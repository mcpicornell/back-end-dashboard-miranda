import {connect, disconnect} from 'mongoose'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.resolve(__dirname, '../.env') });

connectMongoDB().catch(err => console.log(err));

export async function connectMongoDB() {
  try{
    await connect(String(process.env.ATLAS_DB), { useNewUrlParser: true, useUnifiedTopology: true });
  }
  catch(error){
    console.log(error)
    throw error
  }
  
}

export async function disconnectMongoDB(){
  try{
    await disconnect()
  }
  catch(error){
    console.log(error)
    throw error
  }
  
}