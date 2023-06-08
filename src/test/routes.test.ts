import request from 'supertest'
import app from '../app'
import { describe, expect, test, it, beforeAll, afterAll } from '@jest/globals';
import { connectMongoDB, disconnectMongoDB } from '../dataBase/mongoConnector';
import {room, roomToUpdate, booking,bookingToUpdate, user, userToUpdate } from './testExample'

const loginCredentials = {
  email: "admin@admin.com",
  password: "1234"
}

const loginCredentialsAtlas = {
  Username: "mcpicornell",
  Password: "3lCabjm98MmFvERf"
}

describe('Login Endpoints', () => {

  it('Sould LogIn', async () => {
    const res = await request(app)
      .post('/login')
      .send(loginCredentials)
      .expect(200)
    expect(res.body.token).toBeDefined();
  })


it('Sould not LogIn', async () => {
  const res = await request(app)
    .post('/login')
    .send(loginCredentials)
  expect(res.statusCode).toEqual(500)
})
})

// describe('Post Endpoints', () => {

//   it('should create a new room', async () => {
//     const res = await request(app)
//       .post('/api/rooms')
//       .send(room)
//     expect(res.statusCode).toEqual(201)
//     expect(room.roomName).toBe("roomPosted")

//   })

//   it('should create a new user', async () => {
//     const res = await request(app)
//       .post('/api/users')
//       .send(user)
//     expect(res.statusCode).toEqual(201)
//     expect(user.name).toBe("Annalise.Thompson")

//   })

//   it('should create a new booking', async () => {
//     const res = await request(app)
//       .post('/api/bookings')
//       .send(booking)
//     expect(res.statusCode).toEqual(201)
//     expect(booking.guest).toBe("Ben Kennobi")

//   })
// })

// describe('Put Endpoints', () => {

//   beforeAll(async () => {
//     await connectMongoDB();
//   });

//   afterAll(async () => {
//     await disconnectMongoDB();
//   });

//   it('should update a room', async () => {
//     const res = await request(app)
//       .put('/api/rooms/64809da2fa51ce2fcc89a5ea')
//       .send(roomToUpdate)
//     expect(res.statusCode).toEqual(201)
//     expect(roomToUpdate.roomName).toBe("Panic Room")

//   })

//   it('should update a user', async () => {
//     const res = await request(app)
//       .put('/api/users/64809da1fa51ce2fcc89a5b6')
//       .send(userToUpdate)
//     expect(res.statusCode).toEqual(201)
//     expect(userToUpdate.name).toBe("James Tiberius Kirk")

//   })

//   it('should update a booking', async () => {
//     const res = await request(app)
//       .put('/api/bookings/64809da2fa51ce2fcc89a5ed')
//       .send(bookingToUpdate)
//     expect(res.statusCode).toEqual(201)
//     expect(bookingToUpdate.guest).toBe("Anakin SkyWalker")

//   })
// })

// describe('Put Endpoints', () => {

//   beforeAll(async () => {
//     await connectMongoDB();
//   });

//   afterAll(async () => {
//     await disconnectMongoDB();
//   });

//   it('should delete a room', async () => {
//     const res = await request(app)
//       .delete('/api/rooms/64809da2fa51ce2fcc89a5ea')
//       .send(roomToUpdate)
//     expect(res.statusCode).toEqual(202)
//   })

//   it('should delete a user', async () => {
//     const res = await request(app)
//       .delete('/api/users/64809da1fa51ce2fcc89a5b6')
//       .send(userToUpdate)
//     expect(res.statusCode).toEqual(202)
//   })

//   it('should delete a booking', async () => {
//     const res = await request(app)
//       .delete('/api/bookings/64809da2fa51ce2fcc89a5ed')
//       .send(bookingToUpdate)
//     expect(res.statusCode).toEqual(202)
//   })
// })

// describe('Get Endpoints', () => {

//   beforeAll(async () => {
//     await connectMongoDB();
//   });

//   afterAll(async () => {
//     await disconnectMongoDB();
//   });

//   it('should get rooms', async () => {
//     const res = await request(app)
//       .get('/api/rooms')
//       .send(roomToUpdate)
//     expect(res.statusCode).toEqual(200)
//   })

//   it('should get users', async () => {
//     const res = await request(app)
//       .get('/api/users')
//       .send(userToUpdate)
//     expect(res.statusCode).toEqual(200)
//   })

//   it('should get bookings', async () => {
//     const res = await request(app)
//       .get('/api/bookings')
//       .send(bookingToUpdate)
//     expect(res.statusCode).toEqual(200)
//   })
// })

// describe('GetbyId Endpoints', () => {

//   beforeAll(async () => {
//     await connectMongoDB();
//   });

//   afterAll(async () => {
//     await disconnectMongoDB();
//   });

//   it('should get a room', async () => {
//     const res = await request(app)
//       .get('/api/rooms/64809da2fa51ce2fcc89a5ea')
//       .send("64809da2fa51ce2fcc89a5ea")
//     expect(res.statusCode).toEqual(200)
//   })

//   it('should get a user', async () => {
//     const res = await request(app)
//       .get('/api/users/64809da1fa51ce2fcc89a5b6')
//       .send("64809da1fa51ce2fcc89a5b6")
//     expect(res.statusCode).toEqual(200)
//   })

//   it('should update a booking', async () => {
//     const res = await request(app)
//       .get('/api/bookings/64809da2fa51ce2fcc89a5ed')
//       .send("64809da2fa51ce2fcc89a5ed")
//     expect(res.statusCode).toEqual(200)
//   })
// })

