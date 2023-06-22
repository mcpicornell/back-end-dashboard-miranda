import  {Contact, IContact}  from '../../schemas/contactSchema';

async function getContacts() {
  try {
    const contacts = await Contact.find().exec();
    return contacts;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
async function createContact(userData: IContact) {
  try {
    const newUser = new Contact(userData);
    const createdContact = await newUser.save();
    console.log('Contact created succesfully!');

    return createdContact;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

async function updateContact(contactId: string, updatedData: IContact) {
  try {
    const updatedBooking = await Contact.findByIdAndUpdate(contactId, updatedData, {
      new: true
    });
    console.log('Contact updated succesfully!');
    return updatedBooking;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

async function getByIdContact(contactId: string): Promise<IContact | null> {
  try {
    const contact = await Contact.findById(contactId);
    
    return contact;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

async function deleteContact(contactId: string): Promise<void> {
  try {
    await Contact.findByIdAndDelete(contactId);
    console.log('Contact deleted succesfully');
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}


export const contactsRepository = {
  getByIdContact,
  deleteContact,
  updateContact,
  createContact,
  getContacts
};