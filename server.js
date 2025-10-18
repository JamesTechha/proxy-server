const express = require("express");
const cors = require("cors");
const request = require("request");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/stream", (req, res) => {
  const url = "https://s4.radio.co/sa8c52c3d0/listen";
  req.pipe(request(url)).pipe(res);
});

app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
