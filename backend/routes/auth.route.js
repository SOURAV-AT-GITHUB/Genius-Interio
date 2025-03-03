const AuthRouter = require("express").Router();
const { database, databaseBasePath } = require("../config/firebase.config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;
AuthRouter.post("/", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ message: "Invalid request" });
  try {
    const snapshot = await database
      .ref(`${databaseBasePath}/admin`)
      .once("value");
    const credentials = await snapshot.val();
    if (!credentials)
      return res.status(404).json({
        message: "Credentials missing from database, contact the developer",
      });

    if (credentials.email !== email)
      return res.status(400).json({ message: "Invalid email" });

    bcrypt.compare(password, credentials.password, (err, result) => {
      if (err || !result)
        return res.status(401).json({ message: "Incorrent password" });

      const token = jwt.sign({ email, date: Date() }, JWT_SECRET, {
        expiresIn: "1d",
      });
      return res.json({ token });
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

module.exports = AuthRouter;
