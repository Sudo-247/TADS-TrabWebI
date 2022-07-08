const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/view/index.html");
});

app.get("/certificados", (req, res) => {
  res.sendFile(__dirname + "/view/certificados.html");
});

app.get("/certificados/528AF56A", (req, res) => {
  res.sendFile(__dirname + "/Certificados/528AF56A.pdf");
});

app.get("/certificados/5539DC56", (req, res) => {
  res.sendFile(__dirname + "/Certificados/5539DC56.pdf");
});

app.get("/certificados/F1566C93", (req, res) => {
  res.sendFile(__dirname + "/Certificados/F1566C93.pdf");
});

app.listen(PORT, () => {
  console.log(`Rodando em http//localhost:${PORT}`);
});
