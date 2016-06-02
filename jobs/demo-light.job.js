var https = require('https'),
    apikeys = require('../lib/apikeys.js'),
    twilioClient = require('twilio')(apikeys.twilioSid, apikeys.twilioAuthToken);

// declare variables
var cloudval = 0;
var lastcloudval = 0;
var count = 1;

// cloudbit to read inputs from
// change your Access Token and Device ID here
var cloudBitOptions = {
    hostname: 'api-http.littlebitscloud.cc',
    headers: {
        'Authorization': 'Bearer ' + apikeys.cloudbitbearer,
        'Accept': 'application/vnd.littlebits.v2+json'
    },
    path: '/v2/devices/' + apikeys.demoLightID + '/input',
    method: 'GET'
};

// function: getCloudBitValue
// makes request to littlebits cloud, parses input to cloudbit, and sends data to widget
// include any custom interactions here
function getCloudbitValue() {
    var req = https.request(cloudBitOptions, function(cloudResult) {
        cloudResult.setEncoding('utf8')
        cloudResult.on('data', function(data) {
            count++; // stream returns JSON data every 3rd 'data' event
            if (count % 3 == 0) {
                lastcloudval = cloudval;
                cloudval = parseData(data)
                send_event('demo-light', {value: cloudval});
                if (lastcloudval < 90 && cloudval > 90) {
                    //textMe(twilioClient, apikeys.phoneNumber);
                };
            };
        });
    });

    req.on('error', function(err) {
        console.log('problem with the request: ' + err.message)
    });

    req.end();
};


// function: parseData
// reads JSON data from stream, returns percent input seen by cloudBit
function parseData(data) {
    return JSON.parse(data.replace("data:", "")).percent;
};

// function: textMe
// takes twilio client and receiving phone number and sends SMS
function textMe(client, phoneNumber) {
    client.sms.messages.create({
        body: "Check your security dashboard, your drawer is open!",
        to: phoneNumber,
        //from: apikeys.myTwilioPhoneNumber // my phone #
        from: "apikeys.twilioTestNumber" // twilio test #
    }, function(err, message) {
        console.log("message sent! SID: " + message.sid + ". Status: " + message.status);
    });
};

getCloudbitValue();
