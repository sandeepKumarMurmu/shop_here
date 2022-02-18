const express = require("express")
const connect = require("./configs/db")
require("dotenv").config();
const port = process.env.PORT || 2345;

const userController = require("./controller/user.controller")

const app = express();

app.use(express.json())

app.use("/user", userController)
app.listen(port, async () => {
    try {
        await connect();
        console.log(`connection on port ${port}-----------`)

    } catch (e) {
        console.error(e.message)
    }
})