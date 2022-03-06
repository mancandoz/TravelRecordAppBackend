var express = require('express'),
    azureMobileApps = require('azure-mobile-apps');


var app = express(),
    mobileApp = azureMobileApps();

mobileApp.tables.add('Post'); // Create a table for 'Post' with default settings sds
mobileApp.tables.add('Users');
app.use(mobileApp);

app.listen(process.env.PORT || 3000);


