import { RowDataPacket } from "mysql2"

export interface IRooms {
    roomId: number,
    roomName: string,
    isAvaliable: boolean
    offerPrice: number,
    price: number,
    roomNumber: number,
    roomType: string,
    amenities: string[],
    photos: string[]
}

export interface IUsers{
    contact: number,
    descriptionJob: string,
    email: string,
    userId: number,
    name: string,
    photo: string,
    startDate: string,
    isActive: boolean
}
export interface IBookings{
    guest: string,
    orderDate: string,
    checkIn: string,
    bookingId: number,
    checkOut: string,
    specialRequest: string,
    roomObj: IRooms,
    status: string
}
export interface IContacts {
    date: string,
    customerName: string,
    customerEmail: string,
    customerPhoneNumber: number,
    subject: string,
    comment: string,
    isArchive: boolean
}
