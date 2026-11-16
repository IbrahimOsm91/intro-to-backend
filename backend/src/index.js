import dotenv from "dotenv"
import connectDB from "./config/database.js"
import app from "./app.js"

import dns from "node:dns"
dns.setServers(["8.8.8.8"])

dotenv.config({
  path: './.env'
})

const startServer = async () => {
  try {
    await connectDB()

    const PORT = process.env.PORT || 8000;

    const server = app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port : ${PORT}`);
    })

    server.on("error", (error) => {
      console.log("SERVER ERROR:", error);
    })

  } catch (error) {
    console.log("MongoDb connection failed", error);
  }
}

startServer()