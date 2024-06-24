import express from "express";
import router from "./routes/routes";
import cors from "cors";

const app = express();
const port = 3333;

app.use(express.json());
app.use(cors());

app.use('/api', router);

app.get("/", (req, res) => {
  res.json({ message: "Hello!" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
