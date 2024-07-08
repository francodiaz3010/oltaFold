const express = require("express");
const PORt = proccess.env.PORT ?? 3000;
const app = express()
app.listen(PORt, ()=> console.log(`server up in http://www.localhost:${PORt}`))


app.use("/movies",);