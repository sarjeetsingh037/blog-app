const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const authRoutes = require('./routes/auth');
const usersRoutes = require('./routes/users');
const postsRoutes = require('./routes/posts');
const catRoutes = require('./routes/categories');
const multer = require('multer');
const path = require('path');
const app = express();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(console.log("Connected to MongoDB"))
.catch(err=> {
    console.log(err);
});

const storage = multer.diskStorage({
  destination:(req,file,cb)=> {
    cb(null,'images/')
  }, filename:(req,file,cb)=> {
    cb(null, file.originalname);
  },
});

// const upload = multer({storage:storage});
app.use(multer({storage}).single('file'));
app.post('api/upload', (req, res)=> {
  res.status(200).json("File has been uploaded");
});
app.use("/api/auth",authRoutes);
app.use("/api/users",usersRoutes);
app.use("/api/posts",postsRoutes);
app.use("/api/categories",catRoutes);
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
