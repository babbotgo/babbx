import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});
app.listen(process.env.PORT || 3000, () =>
  console.log("Listening to port 3000, http://localhost:3000")
);
