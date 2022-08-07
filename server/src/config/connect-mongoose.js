const mongoose = require("mongoose");
(async () => {
  try {
    const result = await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("db connected on" , process.env.DATABASE_URL);
  } catch (error) {
    console.log(error.message);
  }
})();
