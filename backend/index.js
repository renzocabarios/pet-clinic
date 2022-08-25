import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import connectDB from "./app/db/index.js";
import ENV from "./app/env/index.js";
import animalTypeRoute from "./app/routes/animal-type.route.js";
import animalRoute from "./app/routes/animal.route.js";
import userRoute from "./app/routes/user.route.js";

const app = express();

// middlewares
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: false }));
app.use(cors());

//routes
app.use("/api/animal-type", animalTypeRoute);
app.use("/api/animal", animalRoute);
app.use("/api/user", userRoute);

//initialization
const start = () => {
  connectDB(ENV.MONGO_CON).then(() => {
    console.log(`Database connected to ${ENV.MONGO_CON}`);

    app.listen(ENV.PORT, () => {
      console.log(`Server started on port ${ENV.PORT}`);
    });
  });
};

start();
