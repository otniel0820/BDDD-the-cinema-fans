import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routeUser from "./routes/userRoute";

// import routeProtected from "./routes/protectedRoute";

dotenv.config();


const app = express();
app.use(cors({origin: true, credentials: true}));
app.use(express.json());
app.use('/api', routeUser)

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`USERS_API: Listening on port ${port}`);
});

module.exports = app;