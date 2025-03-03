const express = require("express");
const fs = require("fs");
require("dotenv").config()
const PORT =process.env.PORT || 3000;
const imagesRouter = require("./routes/images.route")
const AuthRouter = require("./routes/auth.route")
const cors = require("cors")
const app = express();
app.use(express.json())
app.use(cors())
app.use("/images",imagesRouter)
app.use("/admin",AuthRouter)


app.use(express.json());
app.get(`/`, async (req, res) => {
return  res.json({message:"Hoem route, server running fine!"})
});
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
