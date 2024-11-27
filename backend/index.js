import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import newsRoute from './Route/news.route.js'
import userRoute from './Route/user.route.js'
import cors from 'cors'
import path from 'path'
const app = express()
dotenv.config()
const port = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

try
{
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  console.log("connected to MongoDB")
} catch (error)
{
  console.log(error)
}
app.use(cors())
app.use(express.json())
app.use('/news', newsRoute)

app.use('/user', userRoute)

//deployment
if (process.env.NODE_ENV === "production")
{
  const dirpath = path.resolve();
  app.use(express.static(dirpath + "/frontend/dist"));
  app.get("*", (req, res) =>
  {
    res.sendFile(path.resolve(dirpath, "frontend", "dist", "index.html"));
  })
}

app.listen(port, () =>
{
  console.log(`server is listening on port ${port}`)
})