import { queryDb } from "../../dataBase/mysqlConnector";
import { IUsers } from "@src/features/interfaces";

const getUsers = async () => {
    try {
        const rows = await queryDb('SELECT * FROM `users`', []);
        return rows;
    }
    catch (error) {
        console.log(error)
    }
}

const getByIdUser = async (userId: number) => {
    try {
        const query = 'SELECT * FROM users WHERE userId = ?';
        const params = [userId];
        const [rows]: IUsers[] = await queryDb(query, params);
        return rows;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
}

const createUser = async (roomObj: IUsers) => {

    try {
        const query = 'INSERT INTO users (userId, name, photo, email, startDate, descriptionJob, contact, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
        const { userId, name, photo, email, startDate, descriptionJob, contact, status } = roomObj;
        const params = [userId, name, photo, email, startDate, descriptionJob, contact, status];
        const result = await queryDb(query, params);
        return result;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const updateUser = async (userId: number, updatedData: IUsers) => {
    try {
        
      const query =
        'UPDATE users SET name = ?, photo = ?, email = ?, startDate = ?, descriptionJob = ?, contact = ?, status = ? WHERE userId = ?';
  
      const params = [
        userId,
        updatedData.name,
        updatedData.photo,
        updatedData.email,
        updatedData.startDate,
        updatedData.descriptionJob,
        updatedData.contact,
        updatedData.status,
        
      ];
      const [rows] = await queryDb(query, params);
      return rows;
    } catch (error) {
      throw error;
    }
  };
const deleteUser = async (userId: number) => {
    try {
        const query = 'DELETE FROM users WHERE userId = ?';
        const params = [userId];
        await queryDb(query, params);
        return 'User deleted successfully';
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const usersSqlRepository = {
    getByIdUser, deleteUser, updateUser, createUser, getUsers
}