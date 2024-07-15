const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Welcome from node rest api")
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});