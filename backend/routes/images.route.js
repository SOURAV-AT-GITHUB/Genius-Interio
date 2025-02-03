const express = require("express");
const imagesRouter = express.Router();
const {
  database,
  databaseBasePath,
  storageBasePath,
  bucket,
} = require("../config/firebase.config");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
imagesRouter.get("/:category", async (req, res) => {
  const { category } = req.params;
  try {
    const snapshot = await database
      .ref(`${databaseBasePath}/${category}`)
      .once("value");
      if (snapshot.exists()) {
      const { title, description } = snapshot.val();
      const {  images } = snapshot.val() 
      res.json({
        message: "Request resolved",
        data: {
          title,
          description,
          images:images ? Object.entries(images).map(([id, data]) => ({ id, ...data })) : [],
        },
      });
    } else {
      res.status(404).send({ message: "No data found" });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});
imagesRouter.post("/:category", upload.single("file"), async (req, res) => {
  const { category } = req.params;
  const title = req.body.title || null;
  const size = req.body.size || null;
  if (!title) {
    return res.status(400).json({ message: "Invalid request body." });
  }
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).json({ message: "No file uploaded." });
    }
    const storagePath = `${storageBasePath}/${category}/${
      file.originalname
    }-${Date.now()}`;
    const fileUpload = bucket.file(storagePath);
    await fileUpload.save(file.buffer, {
      metadata: { contentType: file.mimetype },
    });
    const url = await fileUpload.getSignedUrl({
      action: "read",
      expires: "03-01-2100",
    });
    const imageDetails = { title, size, image: url[0],storagePath };
    const imageRefDb = database
      .ref(`${databaseBasePath}/${category}/images`)
      .push();
    await imageRefDb.set(imageDetails);
    res.status(201).json({
      message: "Image added",
      data: { id: imageRefDb.key, ...imageDetails },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
imagesRouter.patch("/update-title-desc/:category", async (req, res) => {
  const { title } = req.body || {title:null};
  const {  description } = req.body || {description:null};
  const { category } = req.params;
  if (!title && !description) {
    return res.status(400).json({ message: "Invalid request body." });
  }
  try {
    let updatedData = {};
    if (title) updatedData.title = title;
    if (description) updatedData.description = description;
    await database.ref(`${databaseBasePath}/${category}`).update(updatedData);
    if (title && description)
      return res.json({ message: "Title and description updated" });
    else if (title && !description)
      return res.json({ message: "Title Updated" });
    else if (!title && description)
      return res.json({ message: "description Updated" });
    else return res.status(500).json({ message: "Unknow error." });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error, please try again" });
  }
});
imagesRouter.delete("/:category/:id",async(req,res)=>{
  const {category,id} = req.params
  const imageRefDb = database.ref(`${databaseBasePath}/${category}/images/${id}`)
  const snapshot = await imageRefDb.once('value')
  if(!snapshot.exists()){
    return res.status(404).json({ message: 'Image not found' });
  }
  try {
    const {storagePath} = snapshot.val()
    const file = bucket.file(storagePath)
    await file.delete()
    await imageRefDb.remove()
    res.json({message:"Image and details deleted successfully"})
    
  } catch (error) {
    res.status(500).json({message:error.message})
  }
})

module.exports = imagesRouter;
