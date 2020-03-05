const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/users");

require('dotenv').config();

const app = express();

// setup Bodyparser middleware
app.use(
    bodyParser.urlencoded({
        extended:false
    })
);
app.use(bodyParser.json());

// configure the database
const uri = require("./config/keys").ATLAS_URI;


const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true  });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})
connection.catch(error => {
    console.log('Error: ', error);
})

// passport Middleware
app.use(passport.initialize());

// configure passport
require("./config/passport")(passport);

// user routes
app.use("/users", users);


const plantsRouter = require('./routes/plants');
// const usersRouter = require('./routes/users');
app.use('/plants', plantsRouter);
// app.use('/users', usersRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
