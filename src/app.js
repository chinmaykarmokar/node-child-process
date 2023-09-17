import express from "express";
import childRouter from "./Child/child.routes.js";

const app = express();

app.use(express.json());

app.use("/api/childProcess", childRouter);

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server running on port: ${port}.`);
})