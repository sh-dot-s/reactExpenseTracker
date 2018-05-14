var express = require("express");
var app = express();
var path = require("path");

const servableFolder = path.join(__dirname, 'public');
const port = process.env.PORT || 3000

app.use(express.static(servableFolder));

app.get('*', (request, response) => {
    response.sendFile(path.join(servableFolder, 'index.html'));
});

app.listen(port, () => {
    console.log("Express Server running on port 3000");
});