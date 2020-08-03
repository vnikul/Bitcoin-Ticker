const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {

	// сюда прходит объект
	function count(b) {
		a = b.initValue;
		a+= b.step; // 11
		return a;
	}
	var params = { 
		initValue: 10, 
		step: 5 
	};

	var result = count(params);

	// console.log(`Ваше число: ${result}`)

	res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
	var crypto = req.body.crypto;
	var fiat = req.body.fiat;
	var value = Number.parseFloat(req.body.value).toFixed(4);
	var finalUrl = `https://blockchain.info/tobtc?currency=${fiat}&value=${value}`;

	var asd = {
		name: 'asdasd'
	};

	request(finalUrl, function (error, response, body) {
		asd = {
			name: "mehmeh",
			surname: "rerewrf",
			keyvaluenum: 15,
			info: {
				age: 1
			},
			getValue: function () {

			}
		}

		console.log(asd)
		showName(asd);
		res.send(
			"You get " +
				JSON.parse(body) +
				" for " +
				value +
				fiat +
				" This data was produced from the CoinDesk Bitcoin Price Index. BPI value data returned as " +
				fiat +
				".",
		);
	});
	
});

function showName(a) {
	console.log(`Name ${a.getValue()}`)
}

app.listen(3000, function () {
	console.log()
});




function getName(weGetName, callback) {
	setTimeout(function() {
		console.log(`My name is ${weGetName}`);
		callback(`We printed names for users`);
	}, 1000);
}

var person = {
	name: 'Viktor',
	lastName: 'Nikul',
	age: 18
}

getName(
	person.name, 
	function (stringForShow) {
		console.log(stringForShow);
	}
)

