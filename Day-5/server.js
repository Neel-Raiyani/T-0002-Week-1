require('dotenv').config();
const express = require('express');
const app = express();

const userRoutes = require('./routes/userRoutes')

const port = process.env.PORT;


// Environment and error handeling
/* async function fetchData(){
    let user = [
        {id: 1, name: "Neel Raiyani", city: "Nakhatrana"},
        {id: 2, name: "Virat Kohli", city: "Delhi"}
    ]
    return user;
}

// try catch block
app.get("/test", async(req, res) => {
    try {
        const users = await fetchData();
        res.json(users);
    } catch (error) {
        next(error);
    }
});

// Express error middleware
app.use((error, req, res, next) => {
    res.status(500).json({
        message: "Something went wrong...Please try again."
    })
}) */


// REST API principles

/* app.post("/api/v1/users", (req, res) => {
    res.json({
        message: "User created successfully",
        data: req.body
    });
});

app.get("/api/v1/users", (req, res) => {
    res.json({
        message: "All users list"
    });
});

app.get("/api/v1/users/:id", (req, res) => {
    res.json({
        message: "Single user by ID", 
        id: req.params.id
    });
});

app.put("/api/v1/users/:id", (req, res) => {
    res.json({
        message: "User updated succesfully", 
        id: req.params.id,
        data: req.body
    });
});

app.delete("/api/v1/users/:id", (req, res) => {
    res.json({
        message: "User deleted succesfully", 
        id: req.params.id
    });
}); */

// Express Router

app.use("/api/v1/users", userRoutes);

app.listen(port, () => {
    console.log(`Server is running on "http://localhost:${port}"`);
});