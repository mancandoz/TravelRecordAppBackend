var express = require('express'),
    azureMobileApps = require('azure-mobile-apps');

var app = express(),
    mobile = azureMobileApps();

// Define the database schema that is exposed.
mobile.tables.import('./tables');

mobile.tables.add('Post'); // Create a table for 'Post' with default settings sds
mobile.tables.add('Users');

app.use(mobile);
app.listen(process.env.PORT || 3000);
