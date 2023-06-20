


export interface IRooms {
    roomId: number,
    roomName: string,
    isAvailable: boolean
    offerPrice: number,
    price: number,
    roomNumber: number,
    roomType: string,
    amenities: string[],
    photos: string[]
}

export interface IUsers {
    contact: number,
    descriptionJob: string,
    email: string,
    userId: number,
    name: string,
    photo: string,
    startDate: string,
    isActive: boolean
}
export interface IBookings {
    guest: string,
    orderDate: string,
    checkIn: string,
    bookingId: number,
    checkOut: string,
    specialRequest: string,
    roomId: number,
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
