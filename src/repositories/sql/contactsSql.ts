import { queryDb } from "../../dataBase/mysqlConnector";
import { IContacts } from "@src/features/interfaces";

const getContacts = async () => {
    try {
        const rows = await queryDb('SELECT * FROM `contacts`', []);
        return rows;
    }
    catch (error) {
        console.log(error)
    }
}

const getByIdContact = async (contactId: number) => {
    try {
        const query = 'SELECT * FROM contacts WHERE contactId = ?';
        const params = [contactId];

        const [rows]: IContacts[] = await queryDb(query, params);

        return rows;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
}

const createContact = async (contactObj: IContacts) => {

    try {
        const query = "INSERT INTO contacts (contactId, date, customerName, customerEmail, customerPhoneNumber, subject, comment, isArchive) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        const { 
            contactId,
            date,
            customerName,
            customerEmail,
            customerPhoneNumber,
            subject,
            comment,
            isArchive
         } = contactObj;
        const params = [
            contactId,
            date,
            customerName,
            customerEmail,
            customerPhoneNumber,
            subject,
            comment,
            isArchive
        ];
        const result = await queryDb(query, params);
        console.log("Contact created correctly")
        return result;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const updateContact = async (contactId: number, updatedData: IContacts) => {
    try {
        const query = 'UPDATE contacts SET date = ?, customerName = ?, customerEmail = ?, customerPhoneNumber = ?, subject = ?,contactId = ?, comment = ?, isArchive = ? WHERE contactId = ? '
        const params = [contactId, updatedData.date, updatedData.customerName, updatedData.customerEmail, updatedData.customerPhoneNumber, updatedData.subject, updatedData.comment, updatedData.isArchive];

        const [rows] = await queryDb(query, params);
        console.log("Contact updated correctly")
        return rows;

    } catch (error) {
        console.log(error);
        throw error;
    }
}
const deleteContact = async (contactId: number) => {
    try {
        const query = 'DELETE FROM contacts WHERE contactId = ?';
        const params = [contactId];
        await queryDb(query, params);
        return 'Contact deleted successfully';
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const contactsSqlRepository = {
    getByIdContact, deleteContact, updateContact, createContact, getContacts
}