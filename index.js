import express from "express";

import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";
import userRouter from "./routes/user.js";

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);
app.use("/user", userRouter);

app.get('/',(req,res) => {
  res.send('It is Running !....');
});

const CONNECTION_URL =
 /* "mongodb+srv://mernstack:mernstack@mern-webapp.xarr4.mongodb.net/?retryWrites=true&w=majority"; */
    "mongodb+srv://mernblog:mernblog@cluster0.4nubjzq.mongodb.net/";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server runing on port: ${PORT}`))
  )
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);
