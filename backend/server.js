const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

app.get("/read", (req, res) => {
  res.send("Read route working ✅");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

