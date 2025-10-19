import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

// __dirname'i ESM için tanımla
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

const users = [
  { username: "omer", password: "1234" },
  { username: "mehmet", password: "1234" },
  { username: "halil", password: "1234" },
  { username: "omer", password: "1234" },
];

// Login endpoint
app.post("/login", (req, res) => {
  const { username, password, remember } = req.body;

  // Basit dummy kontrol
  const user = users.find((u) => u.username === username && u.password === password);
  if (user) {
    res.send(`
      <h1>Hoş geldin, ${username}!</h1>
      <p>Beni Hatırla: ${remember ? "Evet" : "Hayır"}</p>
      <a href="http://127.0.0.1:5500/ders4-(19.10)/login.html">Geri Dön</a>
    `);
  } else {
    res.send(`
      <h1>Giriş Başarısız!</h1>
      <p>Kullanıcı adı veya şifre hatalı.</p>
      <a href="http://127.0.0.1:5500/ders4-(19.10)/login.html">Tekrar dene</a>
    `);
  }
});

app.post("/upload", (req, res) => {
  res.send(`
    <h1>Dosya Yüklendi!</h1>
    <a href="http://127.0.0.1:5500/ders4-(19.10)/file_upload.html">Geri Dön</a>
  `);
});

app.listen(PORT, () => {
  console.log(`Server çalışıyor: http://localhost:${PORT}`);
});
