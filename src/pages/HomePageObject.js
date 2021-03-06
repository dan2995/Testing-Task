
const I = actor();

module.exports = {
 
    registerButtonViaPopUp: "//div[text()='Sign up now for free']",
    registerButton: "//span[text()='Register']",
    logoutButton: "//a[text()='Log out']",
    personalDetailsButton: "//a[contains(text(), 'Personal Details')]",

    goToRegisterPageViaPopUp(){
        I.click(this.registerButtonViaPopUp);
    },

    clickLogoutButton(){
        I.click(this.logoutButton);
    },

    clickRegisterButton(){
        I.click(this.registerButton);
    },

    clickPersonalDetails(){
        I.click(this.personalDetailsButton);
    }
}