import  {User}  from '../../schemas/userSchema';
import {IUser}  from '../../schemas/userSchema';

async function getUsers() {
  try {
    const rooms = await User.find().exec();
    return rooms;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
async function createUser(userData: IUser) {
  try {
    const newUser = new User(userData);
    const createdUser = await newUser.save();
    return createdUser;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

async function updateUser(userId: string, updatedData: IUser) {
  try {
    const updatedUser = await User.findByIdAndUpdate(userId, updatedData, {
      new: true
    });
    return updatedUser;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

async function getByIdUser(userId: string): Promise<IUser | null> {
  try {
    const user = await User.findById(userId);
    return user;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

async function deleteUser(userId: string): Promise<void> {
  try {
    await User.findByIdAndDelete(userId);
    console.log('User delted succesfully');
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