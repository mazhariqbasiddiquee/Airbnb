const express=require("express")
const app=express()
const mongoose=require("mongoose")
const cors=require("cors")
require('dotenv').config()
const HoustRouter=require("./route/host.route")
const PropertyRoute=require("./route/property.route")
const GuestRoute=require("./route/guest.route")
const BookingRouter=require("./route/booking.route")
const auth=require("./middleware/authenticiation")
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use("/host",HoustRouter)
app.use("/guest",GuestRoute)
app.use("/property",PropertyRoute)
app.use(auth)
app.use("/booking",BookingRouter)

app.listen(process.env.PORT,(err)=>{
    mongoose.connect(process.env.URL)
    console.log("server is running on 4500")
})