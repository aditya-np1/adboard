const express = require("express");
const shopRegisterRouter = require("./app/backend/shopRegisterSubmit"); // Import the router

const app = express();

// Mount the shopRegisterRouter at the desired path
app.use("/shop", shopRegisterRouter);

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
