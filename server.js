var express = require('express')
var app = express()
var port = process.env.PORT || 3000

app.get('/', function (req, res) {
res.send('Hello World!')
})

var mobileApp = require('azure-mobile-apps')(); // Create an instance of a Mobile App with default settings

mobileApp.tables.add('Post'); // Create a table for 'Post' with default settings sds
mobileApp.tables.add('Users');
app.use(mobileApp);
// app.listen(process.env.PORT || 3000);



app.listen(port, function () {
console.log('Example app listening on port 3000!')
})


