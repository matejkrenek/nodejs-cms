const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const handlebars = require("express-handlebars")

const app = express()

/* config mongoose to connect to mongodb */
mongoose.connect("mongodb://localhost:27017/cms_website", { useUnifiedTopology: true })
    .then((res) => {
        console.log("MongoDB connected succesfuly")
    }).catch((err) => {
        console.log("MongoDB connection failed. ")
    })

/* config express */
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));

/* setup view engine */
app.engine("handlebars", handlebars({ defaultLayout: "default" }));
app.set("view engine", "handlebars");

/* routes */
app.use("/", (req, res) => {
    res.render("default/index")
})

app.listen(3000, () => {
    console.log("Server is running on port 300")
});