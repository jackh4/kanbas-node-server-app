import express from 'express';
import session from "express-session";
import mongoose from "mongoose";
import UserRoutes from "./Users/routes.js";
import CourseRoutes from './Courses/routes.js';
import ModuleRoutes from './Modules/routes.js';
import QuizRoutes from './Quizzes/routes.js';
import CourseRoutesA5 from "./Kanbas/courses/routes.js";
import ModuleRoutesA5 from './Kanbas/modules/routes.js';
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import cors from "cors";
import "dotenv/config";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas"
mongoose.connect(CONNECTION_STRING);

const branches = ["master", "a5", "a6", "project"];
const strippedNetlifyUrl = process.env.NETLIFY_URL.replace("https://", "")
const allowedOrigins = [process.env.LOCAL_FRONTEND_URL, ...branches.map((branch) => `https://${branch}--${strippedNetlifyUrl}`)];

const app = express()
app.use(cors({
  credentials: true,
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
  }
}));
// app.use(
//   cors({
//     credentials: true,
//     origin: process.env.FRONTEND_URL,
//   })
// );
const sessionOptions = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
    domain: process.env.HTTP_SERVER_DOMAIN,
  };
}
app.use(session(sessionOptions));
app.use(express.json());
UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
QuizRoutes(app);

ModuleRoutesA5(app);
CourseRoutesA5(app);
Lab5(app);
Hello(app);
app.listen(process.env.PORT || 4000)