## Demo dashboard for SIGNAL 2016 using littleBits, Twilio SMS, and [dashing-js](http://fabiocaseri.github.io/dashing-js).

# Adding a job file
Create a new job file under the `jobs` directory. Edit file to include code executed for widgets. You can add littleBits cloud API and Twilio API calls here.

# Updating ejs file
To add a new widget, create a new list item in your dashboard's ejs file. My dashboard is called `signaldemo`.

# Widgets
Create and edit widgets listed under `widgets` directory. Each widget should have a coffee, html, and scss file. The widgets listed are only a few of those included when creating a new `dashing-js` project.

# Default dashboard
You can change your default dashboard in `server.js`.

# Run locally
Use the `dashing-js start` command while in your dashboard folder to run your dashboard locally.

# dashing-js
Click [here](http://fabiocaseri.github.io/dashing-js) for more info about the dashing-js module
