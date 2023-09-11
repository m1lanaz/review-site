require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const db  = require("./db");
const app = express();

app.use(express.json())

//Get all locations
app.get("/api/v1/locations", async(req, res) => {

    const results = await db.query("SELECT * FROM locations")
    console.log(results);
    res.status(200).json({
        status: "success",
        data: {
            resturant: ["mcd", "wed"],
        },
    });
});

//Get a location
app.get("/api/v1/locations/:id", (req, res) => {
    console.log(req.params);

    res.status(200).json({
        status: "success",
        data: {
            resturant: "mcdonalds"
        }
    })
});

//Create a location
app.post("/api/v1/locations", (req, res) => {
    console.log(req.body);

    res.status(201).json({
        status: "success",
        data: {
            resturant: "mcdonalds"
        }
    })
});

// Update location

app.put("/api/v1/locations/:id", (req, res) => {
    console.log(req.body);
    console.log(req.params.id);

    res.status(200).json({
        status: "success",
        data: {
            resturant: "mcdonalds"
        }
    })
})

// Delete location
app.delete("/api/v1/locations/:id", (req, res) => {
    res.status(204).json({
        status: "success"
    });
});


const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is up and listening on port ${port}`);
}).on('error', (err) => {
    console.error(`Server failed to start: ${err.message}`);
});
