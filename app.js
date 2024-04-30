const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

// serve up production assets
app.use(express.static('frontend/build'));
// let the react app to handle any unknown routes 
// serve up the index.html if express doesn't recognize the route
const path = require('path');
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
});

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

// Marvel API (ctrulov1761) developer.marvel.com
// public 81701568533c9df2869a0fdd5ee0ea46
// private 07c5deb46d0c79d7e78c6f2df27d2afaf052dcad