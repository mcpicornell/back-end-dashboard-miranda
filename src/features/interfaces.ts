
export interface IRooms {
    id: number,
    roomName: string,
    status: string
    offerPrice: number,
    price: number,
    roomNumber: number,
    roomType: string,
    amenities: string[],
    photos: string[]
}

export interface IUsers {
    contact: string,
    descriptionJob: string,
    email: string,
    id: number,
    name: string,
    photo: string,
    startDate: string,
    status: string
}
export interface IBookings {
    guest: string,
    orderDate: string,
    checkIn: string,
    id: number,
    checkOut: string,
    specialRequest: string,
    roomType: IRooms,
    status: string
}
export interface IContacts {
    id: number,
    contactDate: string,
    contactId: number,
    guest: string,
    email: string,
    contact: number,
    title: string,
    text: string
}
