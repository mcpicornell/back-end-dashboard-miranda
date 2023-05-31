import fs from 'fs';
import usersJSON from '../data/users.json';
import { IUsers } from '../features/interfaces';

export const users = usersJSON as IUsers[];

const write = (users: IUsers[]) => {
    fs.writeFileSync("src/data/users.json", JSON.stringify(users, null, 2))
};

const getUsers = async () => {
    return users;
};

const getByIdUser = async (userId: number) => {
    return users.find((element) => element.userId === userId) || null;
};

const postUser = async (user: IUsers) => {
    const userId = users.length + 1;
    user.userId = userId;
    write([...users, user])
    return user;
};

const putUser = async (userId: number, update: Partial<IUsers>) => {
    const user = await getByIdUser(userId)

    if (!user) {
        throw new Error('Not found')
    }

    const updatedRoom = { ...user, ...update };
    const otherRooms = users.filter(element => element.userId !== userId);

    const updatedRooms = [...otherRooms, updatedRoom];
    write(updatedRooms)
    return updatedRoom;
};

const deleteUser = async (userId: number) => {
    const user = await getByIdUser(userId)

    if (!user) {
        throw new Error('Not found')
    }

    const updatedRoom = users.filter(element => element.userId !== userId);

    write(updatedRoom)

    return updatedRoom;
};

export const usersJsonRepository: any = {
    getUsers, getByIdUser, postUser, putUser, deleteUser
}