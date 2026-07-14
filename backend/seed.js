const mongoose = require("mongoose");

const connectDB = require("./config/db");

const User = require("./models/user.model");

const seed = async () => {

  await connectDB();

  await User.deleteMany({});

  await User.create({

    email: "admin@vaptlab.com",

    password: "admin123",

    role: "admin"

  });

  await User.create({

    email: "tarun@vaptlab.com",

    password: "tarun123",

    role: "user"

  });

  console.log("Users Seeded");

  process.exit();

};

seed();