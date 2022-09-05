import { connectDB, closeDB } from "./db/index.js";
import ENV from "./env/index.js";
import model from "./models/user/user.model.js";

const start = () => {
  connectDB(ENV.MONGO_CON).then(async () => {
    console.log(`Database connected to ${ENV.MONGO_CON}`);

    await model.deleteMany({});
    await model.insertMany([
      {
        firstName: "Spy",
        lastName: "Aspin",
        password: "User123!",
        email: "renzo.cabarios@gmail.com",
      },
    ]);

    closeDB();
  });
};

start();
