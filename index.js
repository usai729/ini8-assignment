const express = require("express");
const sql = require("./config");
const route = require("./Routes/Route");

sql.connect((err, _) => {
  if (err) {
    console.log(`Connection error \n${err}`);
  }
});

const app = express();
const port = 3001;

app.use(express.json());

app.use("/api", route);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
