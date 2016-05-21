var express = require('express');
require('../js/sendinblue.js')
var router = express.Router();
/* GET home page. */
// router.get('/', function(req, res, next) {
    var client = new Mailin("https://api.sendinblue.com/v2.0", "U00SPajvryQ9h4E3", 5000); //Optional parameter: Timeout in MS
    sendRequest = {
    	"to":{"mnishamk1995@gmail.com":"nisham"},
    	"from":["x@taxhero.in","TaxHero"],
    	"subject":"test",
    	"html":"This is the <h1>HTML</h1>"
    }
    client.send_email(sendRequest).on('complete',function(data){
    	console.log(data);
    })
    client.get_account().on('complete', function(data) {
        // console.log(data);

    });
    // res.render('index', { title: 'Express' });
// });

module.exports = router;
