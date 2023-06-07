import  {User, IUser}  from '../../schemas/userSchema';
import { connectMongoDB, disconnectMongoDB } from '../../dataBase/mongoConnector';

async function getUsers() {
  try {
    await connectMongoDB();
    const rooms = await User.find().exec();
    await disconnectMongoDB();
    return rooms;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
async function createUser(userData: IUser) {
  try {
    await connectMongoDB();
    const newUser = new User(userData);
    const createdUser = await newUser.save();
    await disconnectMongoDB();
    return createdUser;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

async function updateUser(userId: string, updatedData: IUser) {
  try {
    await connectMongoDB();
    const updatedUser = await User.findByIdAndUpdate(userId, updatedData, {
      new: true
    });
    await disconnectMongoDB();
    return updatedUser;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

async function getByIdUser(userId: string): Promise<IUser | null> {
  try {
    await connectMongoDB();
    const user = await User.findById(userId);
    await disconnectMongoDB();
    return user;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

async function deleteUser(userId: string): Promise<void> {
  try {
    await connectMongoDB();
    await User.findByIdAndDelete(userId);
    console.log('User delted succesfully');
    await disconnectMongoDB();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}


export const usersRepository = {
  getByIdUser,
  deleteUser,
  updateUser,
  createUser,
  getUsers
};