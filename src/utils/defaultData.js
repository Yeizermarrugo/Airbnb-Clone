const Accommodation_images = require("../models/accommodation_images.model");
const Accommodations = require("../models/accommodations.model");
const Places = require("../models/places.model");
const Reservations = require("../models/reservations.model");
const Users = require("../models/users.model");
const Users_images = require("../models/users_images.model");
const Roles = require("../models/roles.model");

const generateData = async () => {
    await Roles.bulkCreate([{ name: "guest", id: "bef466a5-114c-4d6f-ba23-8f74658dec18"}, { name: "host", id: "711a4d79-f759-411f-a0eb-41b86e1f66be"}, { name: "admin", id: "a7172929-995d-43c0-afca-f8149bd518e5"}], {validate: true})
    await Users.create({
        
        id: "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",
        firstName: "Sahid",
        lastName: "Kick",
        gender: "male",
        email: "sahid.kick@academlo.com",
        password: "$2b$10$TNGcRFonQH98rVqFaBVfpOEEv2Xcu5ej14tWqKim3z3L6Tr.ZIaqC",
        phone: "1234567890",
        birthdayDate: "2000-10-13",
        dni: "",
        address: "",
        roleId: "a7172929-995d-43c0-afca-f8149bd518e5",
        profileImage: "asd.com",
        status: "active",
        verified: false
      })
      await Places.bulkCreate([
        {
          id: '864ee3c2-facd-4a23-8b4a-4e9d342d9036',
          city: 'Guadalajara',
          state: 'Jalisco',
          country: 'México',
          continent: 'America'
        },
        {
          id: '9c0412b6-7d56-4347-8fbe-5455e8a42438',
          city: 'Zapopan',
          state: 'Jalisco',
          country: 'México',
          continent: 'America'
        },
        {
          id: '3436a556-6623-40ba-88b8-2e01009f9d82',
          city: 'Bogotá',
          state: 'Bogotá',
          country: 'Colombia',
          continent: 'America'
        },
        {
          id: '134a55b6-487c-46cc-a5b5-9392af20c205',
          city: 'Medellín',
          state: 'Antioquia',
          country: 'Colombia',
          continent: 'America'
        },
        {
          id: '3a230417-80ae-4232-a8ff-6fd50068a777',
          city: 'Cartagena',
          state: 'Bolivar',
          country: 'Colombia',
          continent: 'America'
        },
        {
          id: '0d907427-7623-4ec9-8c6d-270bb92fbbe7',
          city: 'Monterrey',
          state: 'Muevo León',
          country: 'México',
          continent: 'America'
        },
      ]),

      await Accommodations.create({
        id: "7e5fc196-8f45-46d2-bb2b-2f8b95340d50",
        title: "premium - vistas 360 ciudad (alberca y gym)",
        description: "Acerca del espacio. Este impresionante departamento te dejará sin palabras! Quédate en este amplio y elegante departamento con 3 habitaciones, las vistas son increíbles y podrás ver toda la ciudad!",
        guests: 6,
        rooms: 3,
        beds: 3,
        bathrooms: 4.5,
        price: 1536.00,
        hostId : '74cd6011-7e76-4d6d-b25b-1d6e4182ec2f',
        score: 0.00,
        placeId: '9c0412b6-7d56-4347-8fbe-5455e8a42438',
        placesId: '9c0412b6-7d56-4347-8fbe-5455e8a42438',
        userId: '74cd6011-7e76-4d6d-b25b-1d6e4182ec2f',
        commision: 150.00
      })
    
    }
    
    

module.exports = generateData