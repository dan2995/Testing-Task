
Feature('Registration Page');

	Before((I, HomePageObject) => {
		I.amOnPage('m.tipico.com');
		HomePageObject.goToRegisterPageViaPopUp();
		I.retry({retries: 3, minTimeout: 5000}).see('Open an Account now');
	});

	// Scenario('Test Registration Page - Success', (I, RegistrationPageObject) => {
	// 	//const user_success = getJSONObjectFromXMLFile("./testData/user.xml").then(data => console.log(data));
	// 	const user_success = getJSONObjectFromXMLFile("./testData/user.xml");
	//
	// 	console.log("json4: " + user_success);
	// 	// RegistrationPageObject.registerUser(user_success);
	// 	//
	// 	// //Make sure that user was logged in with newly created user
	// 	// I.see('Logged in as: ' + user_success.firstName + ' ' + user_success.lastName);
	// 	// I.see('Log out');
	// });

	Scenario('Test Registration Page - Success', (I, RegistrationPageObject) => {
		const user_success = getJSONObjectFromJSONFile("./testData/user_success.json");
		RegistrationPageObject.registerUser(user_success);

		//Make sure that user was logged in with newly created user
		I.see('Logged in as: ' + user_success.firstName + ' ' + user_success.lastName);
		I.see('Log out');
	});

	Scenario('Test Registration Page - Register Duplicate User', (I, RegistrationPageObject, HomePageObject) => {
		const duplicate_user = getJSONObjectFromJSONFile("./testData/duplicate_user.json");

		//Create first user & make sure user is logged in
		RegistrationPageObject.registerUser(duplicate_user);
		I.see('Logged in as: ' + user_success.firstName + ' ' + user_success.lastName);

		//Go to registration page again and try to register another user with the same username
		HomePageObject.clickLogoutButton();
		HomePageObject.clickRegisterButton();
		RegistrationPageObject.registerUser(duplicate_user);

		//Make sure that error is shown since I tried to create a duplicate user
		I.see('The form hasn\'t been completed properly. Please look again at the boxes marked as incorrect in the form.');
		I.see('Username is taken, please choose another one.\n');
	});

	Scenario('Test Registration Page - Check for Field Validations Required', (I, RegistrationPageObject) => {
        RegistrationPageObject.clickStoreDetails();

        //Assert for error message since required fields were left empty
     	I.see('The form hasn\'t been completed properly. Please look again at the boxes marked as incorrect in the form.');
		I.see('"Username" is required.');
		I.see('"E-mail" is required.');
		I.see('"Password" is required.');
		I.see('"First name" is required.');
		I.see('"Last name" is required.');
		I.see('You must be over 18 years of age.');
		I.see('"City of birth" is required.');
		I.see('"Street & House No" is required.');
		I.see('"City" is required.');
		I.see('"Postcode" is required.');
	});

	function getJSONObjectFromJSONFile(filePath){
    	return require(filePath);
    };


	// async function getJSONObjectFromXMLFile(filePath) {
	// 	const fs = require('fs');
	// 	const xml2js = require('xml2js');
	// 	const parser = new xml2js.Parser();
	//
	// 	const json = f;
	// 	console.log("json1: " + json);
	// 	return json;
	// };
	//
	// function f() {
    //     return fs.readFile(filePath, "utf-8", function (error, text) {
    //         return parser.parseString(text, function (err, result) {
    //             json = result['user'];
    //             console.log("json2: " + json);
    //             return json;
    //         });
    //     });
    // }

// function getJSONObjectFromXMLFile(filePath) {
// 	const fs = require('fs');
//     const util = require('util');
//
//
//
//     const readFile = util.promisify(fs.readFile);
//
//     async function getStuff() {
//         return await readFile(filePath);
//     }
//
//     getStuff().then(data => {
//
//                     parser.parseString(text, function (err, result) {
//                         json = result['user'];
//                         console.log("json2: " + json);
//                         return json;
//                     });
//                 })
//
// 	// const xml2js = require('xml2js');
// 	// const parser = new xml2js.Parser();
// 	//
// 	// const json = f();
// 	// console.log("json1: " + json);
// 	// return json;
// };

// function getJSONObjectFromXMLFile(filePath) {
// 	const fs = require('fs');
// 	const xml2js = require('xml2js');
// 	const parser = new xml2js.Parser();
//
// 	var json;
//
//     fs.readFile(filePath, "utf-8", function (error, text) {
//         parser.parseString(text, function (err, result) {
//             json = result['user'];
//             console.log("json2: " + json.country);
//         });
//     });
//
// 	console.log("json1: " + json);
// 	return json;
// };

// function getJSONObjectFromXMLFile(filePath) {
//
//
//     // const fs = require('fs');
//     // const parser = require('xml2json');
// 	//
//     // fs.readFile(filePath, function(err, data) {
//     //     var json = parser.toJson(data);
//     //     console.log("to json ->", json);
//     // });
//
//
//     const fs = require('fs');
//
// 	const xml2js = require('xml2js');
//     var parser = new xml2js.Parser();
//     fs.readFile(filePath, 'utf8', function(err, data) {
//         if (!err) {
//             console.log(data);
//         }
//     });
//
// };

// function getJSONObjectFromXMLFile(filePath) {
//     var fs = require('fs');
//     var xml2js = require('xml2js');
//
//     try {
//         var fileData = fs.readFileSync(filePath, 'ascii');
//         console.log("file data: " + fileData);
//
//         var parser = new xml2js.Parser();
//         return parser.parseString(fileData.substring(0, fileData.length), function (err, result) {
//             var json = JSON.stringify(result);
//             var json2 = result['user'];
//             console.log("json: " + json);
//             console.log("json2: " + json2);
//             console.log("json3: " + json2.country);
//
//             return json2;
//         });
//
//         console.log("File '" + filePath + "/ was successfully read.\n");
//     } catch (ex) {
//         console.log("Unable to read file '" + filePath + "'.");
//         console.log(ex);
//     }
// };