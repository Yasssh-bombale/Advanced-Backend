import { app } from "./app.js";
import MongoConnection from "./db/index.js";
import { config } from "dotenv";

config({
  path: "./config.env",
});

MongoConnection()
  .then(
    () =>
      app.listen(process.env.PORT || 8000, () =>
        console.log(`Server started successfully ${process.env.PORT}`)
      ),
    app.on("error", (error) =>
      console.log(`Error while connecting to server ${error}`)
    )
  )
  .catch((error) => console.log(`Mongo Connection failed${error}`));
