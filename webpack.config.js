const {withModuleFederationPlugin} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: "shell",
  remotes: {
    // remoteApp: "product@http://localhost:4100/remoteEntry.js",
    ssoApp: "ssoApp@http://localhost:4200/remoteEntry.js",
  },
  shared: {
    "@angular/core": {singleton: true, strictVersion: true},
    "@angular/common": {singleton: true, strictVersion: true},
    "@angular/router": {singleton: true, strictVersion: true},
    rxjs: {singleton: true, strictVersion: true},
  },

});
