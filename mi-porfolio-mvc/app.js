const express = require("express");
const app = express();
const mainRouter = require("./routers/main")


app.listen(3000, () => console.log("server up in http://www.localhost:3000"));

app.use(express.static("./public"));

app.use("/", mainRouter);