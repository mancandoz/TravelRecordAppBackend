//var app = require('express')(); // Create an instance of an Express app

//var mobileApp = require('azure-mobile-apps')(); // Create an instance of a Mobile App with default settings

//mobileApp.tables.add('Post'); // Create a table for 'Post' with default settings sds
//mobileApp.tables.add('Users');
//app.use(mobileApp);
//app.listen(process.env.PORT || 3000);



const express = require('express') // npm install express
const app = express()
const port = 3000

// Send text
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Send HTML File
app.get('/', (req, res) => {
  res.sendFile('./index.html')
})

app.listen(port, () => {
  console.log(`Your app is listening to port ${port}`)
})
