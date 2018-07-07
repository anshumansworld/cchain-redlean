const express = require('express');
const app = express();
var path = require('path'); 
app.use(express.static(path.join(__dirname, 'dist/')));


// Run the app by serving the static files
// in the dist directory

app.get('/*', function(req, res) { 
    res.sendFile(path.join(__dirname + 'index.html'));
 });
// Start the app by listening on the default
// Heroku port

app.listen(process.env.PORT || 3000);

