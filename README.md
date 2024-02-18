# Airbnb
# This project is bases on home booking , where host can host their homes and guest can book and see their past booking.

## Project Type
 Fullstack

 ## Deplolyed App
 Frontend: https://airbnb-pied-five.vercel.app
Backend: https://airbnb-cvee.onrender.com

## Directory Structure
backend/
|--
 frontend/
  ├─ ...


  ## Video Walkthrough of the project
Attach a very short video walkthough of all of the features [ 1 - 3 minutes ]

## Video Walkthrough of the codebase
Attach a very short video walkthough of codebase [ 1 - 5 minutes ]

## Features
List out the key features of your application.

- Filtering
- Booking
- authenticiation
- Past booking on user based

  
## Installation & Getting started
Detailed instructions on how to install, configure, and get the project running. For BE/FS projects, guide the reviewer how to check mongodb schema etc.

cd Backend
npm install
npm run server

cd Frontend
npm install
npm run start

## Credentials
mazhar@gmail.com
12345
You can also create your own data for login puroose
## API Endpoints
In case of Backend Applications provide a list of your API endpoints, methods, brief descriptions, and examples of request/response.

## for host

{
    Name:{type:String},
    HostStatus:{type:String,default:"Active"},
    Location:{type:String},
    PropertyType:{type:String,enum:["Apartment","House","Unique Homes"]},
    About:{type:String},
    HostingSince:{type:Date} 
}

GET /host - retrieve all host
POST /host/add - create a new host
Patch /host/update/:_id  - update host details
Delete /host/delete/:_id - delete hots details


 ## for Guest

{
    Name:{type:String},
    Email:{type:String},
    Password:{type:String},

}
 
 GET /guest - retrieve all guest
POST /guest/add - create a new guest
Patch /guest/update/:_id  - update guest details
Delete /guest/delete/:_id - delete guest details

## for Property
Property Schema 
{
    Name:{type:String},
    Location:{type:String},
    PropertyType:{type:String,enum:["Apartment","House","Unique Homes"]},
    About:{type:String},
    Booked:{type:Boolean,default:"false"},
    img:{type:String},
    Host_id:{type: mongoose.Schema.Types.ObjectId,ref:"Host"} 
}


 GET /property - retrieve all property
 GET /property?Location=Jamshedpur - retrieve all property in Jamshedpur
GET /property?Location=Jamshedpur&PropertyType=Home - retrieve all property in Jamshedpur, which are home
GET /property?PropertyType=Home - retrieve all property, whoose gategory is home
POST /property/add - create a new propert ,In Property type you can only add these values Apartment","House","Unique Homes
Patch /property/update/:_id  - update property details
Delete /property/delete/:_id - delete property details


## for booking

{
    Name:{type:String},
    Paid:{type:Boolean,default:"true"},
    Property_id:{type:mongoose.Schema.Types.ObjectId,ref:"Property"} ,
    Guest_id:{type: mongoose.Schema.Types.ObjectId,ref:"Guest"},
    start_date:{type:Date},
    end_date:{type:Date},
    img:{type:String} 

}


 GET /booking - retrieve all booking
POST /booking/add - create a new booking
Patch /booking/update/:_id  - update booking details
Delete /booking/delete/:_id - delete booking details



## Technology Stack
List and provide a brief overview of the technologies used in the project.

- Node.js
- Express.js
- MongoDB
- React
- CSS
 
