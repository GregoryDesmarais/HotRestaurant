// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();

//Changed from just setting port to 3000.
var PORT = process.env.PORT || 3000;


// Variables
// =============================================================
const tables = [];
const waitList = [];

function Table(name, phone, email, id)
{
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.id = id;
}

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserver.html"));
});



// Displays all characters
app.get("/api/tables", function (req, res) {
    return res.json(tables);
});


// Create New reservation - takes in JSON input
app.post("/reserve", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var info = req.body;
    var newReservation = new Table(info.name, info.phone, info.email, info.id);

    if(tables.length > 5)
    {
        waitList.push(newReservation);
    }else{
        tables.push(newReservation);
    }
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on http://localhost:" + PORT);
});
