var dashing = require('dashing-js').Dashing();

// Set your auth token here
//dashing.auth_token = 'YOUR_AUTH_TOKEN';


dashing.protected = function(req, res, next) {
  // Put any authentication code you want in here.
  // This method is run before accessing any resource.;
  //if (true) next();

  next();
}


// Set your default dashboard here
dashing.default_dashboard = 'signaldemo';

dashing.start();
