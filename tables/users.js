//var table = module.exports = require('azure-mobile-apps').table();


var azureMobileApps = require('azure-mobile-apps');

var table = azureMobileApps.table();


table.read(function (context) {
    return context.execute();
});

table.insert(function (context) {
    return context.execute();
});

table.update(function (context) {
    return context.execute();
});

table.delete(function (context) {
    return context.execute();
});


