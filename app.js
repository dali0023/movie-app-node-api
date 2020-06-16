const path = require("path");
const express = require("express");
const app = express();


// Connect EJS Template Engine:
app.set("view engine", "ejs");
app.set("views", "views");

//connect route with individual file
const adminRoutes = require("./routes/admin");

// convert form data
const bodyPerser = require("body-parser");
app.use(bodyPerser.urlencoded({ extended: false }));

// Connect Static Files,
app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static("public"));

// connect all routes files
app.use(adminRoutes);
// app.use("/admin",shopRoutes);

// Create 404 page
const errorControllers = require("./controllers/errorController");
app.use(errorControllers);

// create PORT
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`this server is running on ${PORT}`));
