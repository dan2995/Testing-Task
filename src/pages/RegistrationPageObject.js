
const I = actor();

module.exports = {

	accountDetails: {
	  	country: "//select[@id='registerForm:country']",
	  	username: "//input[@id='registerForm:login']",
	  	email: "//input[@id='registerForm:email']",
	  	password: "//input[@id='registerForm:password']",
	  	confirmPassword: "//input[@id='registerForm:passwordConfirm']"
	},
	
	userDetails: {
	  	titleMr: "//input[@id='registerForm:salutation:0']",
		titleMsMrs: "//input[@id='registerForm:salutation:1']",
	  	firstName: "//input[@id='registerForm:firstName']",
	  	lastName: "//input[@id='registerForm:lastName']",
	  	dateOfBirthYear: "//select[@id='registerForm:year']",
	  	dateOfBirthMonth: "//select[@id='registerForm:month']",
	  	dateOfBirthDay: "//select[@id='registerForm:day']",
	  	nationality: "//select[@id='registerForm:nationality']",
	  	countryOfBirth: "//select[@id='registerForm:birthCountry']",
	  	cityOfBirth: "//input[@id='registerForm:birthCity']"
	},
	
	contactDetails: {
	  	streetAndHouseNo: "//input[@id='registerForm:street']",
	  	city: "//input[@id='registerForm:city']",
	  	postcode: "//input[@id='registerForm:zipCode']",
	  	mobilePhone: "//input[@id='registerForm:phoneMobile']"
	},
	
	checkboxes: {
	  	promotionalEmails: "//input[@id='registerForm:dataProcessing']",
      	receiveNewsletter: "//input[@id='registerForm:deutscheFootballLiga']"
	},
	
	storeDetailsButton: "//a[@id='registerForm:registerButtonGDPR']",
  
  	fillAccountDetails(userAccountDetails){
		I.selectOption(this.accountDetails.country, userAccountDetails.country);
		I.fillField(this.accountDetails.username, userAccountDetails.username);
		I.fillField(this.accountDetails.email, userAccountDetails.email);
		I.fillField(this.accountDetails.password, userAccountDetails.password);
		I.fillField(this.accountDetails.confirmPassword, userAccountDetails.confirmPassword);
  	},
  
  	fillUserDetails(userDetails){
		// If title passed is 'Mr' no need to do anything since this is the default selected value; however, if title is Ms/Mrs, we need to select it
		if(userDetails.title === "Ms/Mrs"){
	  		I.checkOption(this.userDetails.titleMsMrs);
		}
		I.fillField(this.userDetails.firstName, userDetails.firstName);
		I.fillField(this.userDetails.lastName, userDetails.lastName);
		I.selectOption(this.userDetails.dateOfBirthYear, userDetails.dateOfBirthYear);
		I.selectOption(this.userDetails.dateOfBirthMonth, userDetails.dateOfBirthMonth);
		I.selectOption(this.userDetails.dateOfBirthDay, userDetails.dateOfBirthDay);
        I.selectOption(this.userDetails.dateOfBirthDay, userDetails.dateOfBirthDay);
        I.selectOption(this.userDetails.nationality, userDetails.nationality);
		I.selectOption(this.userDetails.countryOfBirth, userDetails.countryOfBirth);
		I.fillField(this.userDetails.cityOfBirth, userDetails.cityOfBirth);
    },
  
  	fillContactDetails(contactDetails){
		I.fillField(this.contactDetails.streetAndHouseNo, contactDetails.streetAndHouseNo);
		I.fillField(this.contactDetails.city, contactDetails.city);
		I.fillField(this.contactDetails.postcode, contactDetails.postcode);
		I.fillField(this.contactDetails.mobilePhone, contactDetails.mobilePhone);
  	},
  
  	tickCheckboxes(checkboxes){
		//Since by default these checkboxes are unticked, tick only if user passes true
		if(checkboxes.promotionalEmails === true){
			I.checkOption(this.checkboxes.promotionalEmails);
		}
		if(checkboxes.receiveNewsletter === true){
			I.checkOption(this.checkboxes.receiveNewsletter);
		}
  	},

  	clickStoreDetails(){
		I.click(this.storeDetailsButton);
  	},
  
 	registerUser(userData){
		this.fillAccountDetails(userData);
        this.fillUserDetails(userData);
        this.fillContactDetails(userData);
        this.tickCheckboxes(userData);
		this.clickStoreDetails();
 	}
}
