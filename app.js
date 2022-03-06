// ----------------------------------------------------------------------------
// Copyright (c) 2015 Microsoft Corporation. All rights reserved.
// ----------------------------------------------------------------------------

 use strict

// This is a base-level Azure Mobile App SDK
var express = require('express'),
    azureMobileApps = require('azure-mobile-apps');

// Set up a standard Express app
var app = express();

// If you are producing a combined Web + Mobile app, then you should handle
// anything like logging, registering middleware, etc. here

// Configuration of the Azure Mobile Apps can be done via an object, the
// environment or an auxiliary file.  For more information, see
// http://azure.github.io/azure-mobile-apps-node/global.html#configuration

/* Erim Bu yorumu sil
var mobile = azureMobileApps({
    // Explicitly enable the Azure Mobile Apps home page
    homePage: true
});
Erim bu yorumu sil
*/
// Import the files from the tables directory to configure the /tables endpoint

//erim bu da silinecek mobile.tables.import('./tables');

// Import the files from the api directory to configure the /api endpoint
//! Un-comment if api folder exists
// mobile.api.import('./api');

// Initialize the database before listening for incoming requests
// The tables.initialize() method does the initialization asynchronously
// and returns a Promise.

app.get('/', function (req, res) {
res.send('Hello World!')
})

app.listen(3000, function () {
console.log('Example app listening on port 3000!')
})

// yorumu sil mobile.tables.initialize()
 // yorumu sil    .then(function () {
      // yorumu sil   app.use(mobile);    // Register the Azure Mobile Apps middleware
     // yorumu sil    app.listen(process.env.PORT || 3000);   // Listen for requests
   // yorumu sil  });
