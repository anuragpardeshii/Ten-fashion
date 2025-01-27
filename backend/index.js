const express = require("express");

const app = express();

require("dotenv").config({ path: "../.env" });

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
