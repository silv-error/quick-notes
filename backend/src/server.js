import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

import notesRoutes from "./routes/notes.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json({ limit: "5mb" }));
app.use(rateLimiter);

// routes
app.use("/api/notes", notesRoutes);

await connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
});
