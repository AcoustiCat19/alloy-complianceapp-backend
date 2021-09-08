var request = require('request');

var headers = {
    'Content-Type': 'application/json'
};


var appRouter = function (app) {
    app.get("/", function(req, res) {
      res.status(200).send("Restful API is running");
    });
    app.post("/clientOnboarding", function(req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        var data = {
            "name_first": req.body.firstName,
            "name_last": req.body.lastName,
            "email_address": req.body.email,
            "phone_number":req.body.phone,
            "address_line_1": req.body.addressOne,
            "address_line_2": req.body.addressTwo,
            "address_city": req.body.city,
            "address_state": req.body.state,
            "address_postal_code": req.body.zip,
            "address_country_code": req.body.country,
            "document_ssn": req.body.ssn,
            "birth_date": req.body.dob,
        };
        console.log(data);
        
        var options = {
            url: 'https://sandbox.alloy.co/v1/evaluations',
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data),
            auth: {
                'user': 'API-user-here',
                'pass': 'API-key-here'
            }
        };
        function callback(error, response, body) {
            // console.log(body);
            // console.log(error);
            // console.log(response);
            if (!error) {
                console.log(JSON.parse(body));
                res.status(200).send({result: JSON.parse(body)});
            }
        }
        request(options, callback);

        console.log(req.body);
    })
  }
  
  module.exports = appRouter;