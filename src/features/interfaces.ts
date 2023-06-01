
enum roomType {
    "Single","Double Bed","Double Superior","Suite"
}

enum bookingStatus {
    "Check In","Check Out","In Progress"
}

export interface IRooms {
    roomId: number,
    roomName: string,
    isAvaliable: boolean
    offerPrice: number,
    price: number,
    roomNumber: number,
    roomType: roomType,
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
    status: bookingStatus
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
