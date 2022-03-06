var express = require('express'),
    azureMobileApps = require('azure-mobile-apps');

var app1 = express(),
    mobile1 = azureMobileApps();

mobile1.tables.import('./tables');
mobile1.tables.add('Post'); // Create a table for 'Post' with default settings sds
mobile1.tables.add('Users');

/*

app.use(mobileApp);

mobile.tables.import('./tables');

mobile.tables.initialize()
    .then(function () {
        app.use(mobile);    // Register the Azure Mobile Apps middleware
        app.listen(process.env.PORT || 3000);   // Listen for requests
    });

*/
