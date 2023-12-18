require("./database/Db.js");
const { json, urlencoded } = require("express");
const express = require("express");
const cors = require('cors')
const contentRouter = require("./routes/ContentRoutes");

const app = express();


//middleware
app.use(cors())
app.use(json());
app.use(urlencoded({ extended: true }));
app.use('/api/content', contentRouter);

app.listen(3001, () => {
  console.log(`Server is running on port 3001`);
});
