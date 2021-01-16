const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
// });

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models/index");
db.sequelize.sync();
// // simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to application." });
// });

require("./routes/routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});