
Feature('Registration Page');

	Before((I, HomePageObject) => {
		I.amOnPage('web-spartans.tipdev.com');
		HomePageObject.goToRegisterPageViaPopUp();
		I.retry({retries: 3, minTimeout: 5000}).see('Open an Account now');
	});

	Scenario('Test Registration Page - Success', (I, RegistrationPageObject) => {
		const user_success = getJSONObjectFromJSONFile("./testData/valid_user_1.json");
		RegistrationPageObject.registerUser(user_success);

		//Make sure that user was logged in with newly created user
		I.see('Logged in as: ' + user_success.firstName + ' ' + user_success.lastName);
		I.see('Log out');
	});

	Scenario('Test Registration Page - Register Duplicate User', (I, RegistrationPageObject, HomePageObject) => {
		const duplicate_user = getJSONObjectFromJSONFile("./testData/valid_user_2.json");

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