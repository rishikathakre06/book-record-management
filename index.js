const express = require("express");
const {users} = require("./data/users.json")

const app = express();

const PORT = 8081;

app.use(express.json());

app.get("/", (req, res)=>{
    res.status(200).json({
        message: "Server is up and running"
    })
})

/**
 * Route: /users
 * Method: GET
 * Description: Get All Users
 * Access: Public
 * Parameters: None
 */
app.get("/users",(req, res)=>{
    res.status(200).json({
        success: true,
        data: users
    })
})
app.get("*", (req, res)=>{
    res.status(200).json({
        message: "this route does not exists"
    })
})

app.listen(PORT, ()=>{
    console.log(`server is up and running on port ${PORT}`);
})
