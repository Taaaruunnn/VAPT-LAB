const mongoose = require("mongoose");

const connectDB = async () => {

  try {

    await mongoose.connect(
      "mongodb://taaaruunnn_db_user:L8jypwlIDOszmUKB@ac-cls7myw-shard-00-00.xeif1gg.mongodb.net:27017,ac-cls7myw-shard-00-01.xeif1gg.mongodb.net:27017,ac-cls7myw-shard-00-02.xeif1gg.mongodb.net:27017/VAPT-LAB?ssl=true&replicaSet=atlas-ow9nby-shard-0&authSource=admin&appName=Cluster0"
    );

    console.log("MongoDB Connected");

  } catch (error) {

    console.error("MongoDB Connection Failed");

    console.error(error);

    process.exit(1);

  }

};

module.exports = connectDB;
//mongodb://taaaruunnn_db_user:L8jypwlIDOszmUKB@ac-cls7myw-shard-00-00.xeif1gg.mongodb.net:27017,ac-cls7myw-shard-00-01.xeif1gg.mongodb.net:27017,ac-cls7myw-shard-00-02.xeif1gg.mongodb.net:27017/?ssl=true&replicaSet=atlas-ow9nby-shard-0&authSource=admin&appName=Cluster0