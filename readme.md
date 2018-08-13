General Note:

This solution was implemented as specified in the task description. For this solution, Codeceptjs and WebDriverIO were used together with selenium standalone
using ChromeDriver. 

The implementation: 

This solution was implemented mainly in RegistrationPage_test.js. This Test Suite makes use of 2 Page Objects (HomePageObject.js and RegistrationPageObject.js) 
to define fields and methods related to these pages. With regards to test data, this test suite reads JSON files from './testData' folder. It was decided that
each test (scenario) would have its own JSON file to represent the user being created in that particular test. 

In the test class (RegistrationPage_test.js), one can find a Before method which executes before each test scenario to execute the common code for all scenarios. Then, one can find
3 scenarios; 'Test Registration Page - Success', 'Test Registration Page - Register Duplicate User' and 
'Test Registration Page - Check for Field Validations Required'. In the first scenario, I am testing the success path - the path where all fields are valid
and I assert that after registration, the application logs in with the correct user just registered. In the second scenario, I am testing that the system 
does not allow duplicate users to register since the username must be unique. In the final scenario, I am testing that if one tries to leave the required
fields empty, the system shows that these fields are required. 

With regards to Page Objects, I have implemented two: HomePageObject.js and RegistrationPageObject.js (found at './pages'). In the HomePageObject, I have 
implemented 3 methods: one to go to the registration page via the pop up which is shown when one goes to the tipico website and the other two click on the 
register button and on the logout buttons in the header of webpage. In the RegistrationPageObject, I have, first of all, split the fields locators into 
sections which are like the sections of the webpage itself for maintainability, cleanliness and readability purposes. Moreover, I have implemented methods 
which fill the sections of the registration page which take a JSON object as test data and fill in the respective section of the page with this test data; 
I have split them into sections, again, for maintainability, cleanliness and readability purposes. Then, I have another method called registerUser() which 
calls all the other methods so that in the test class, one would not have to call 5 methods but only one. 

One limitation of this implementation is that since the JSON file is fixed, tests which are executed more than once will not pass since a username should be 
unique. Another way this could have been implemented instead of reading from JSON file, a Random class would have been implemnted so data is generated on the 
fly and unique each time, hence the test could have been run as many as one likes. This solution was not implemented this way since in the description it was 
stated that the test should read from an external data source.  

In case one would like to test this out using his/her own JSON file, please create a valid JSON file with extension .json in './testData' folder and use the file
from the test scenario, referring to it by path. 

Commands used: 

-> To create the test class: codeceptjs gt
-> To create page objects: codeceptjs gpo
-> For the reporting to work (xml report): npm install -g mocha, npm install -g mocha-junit-reporter
-> For the reporting to work (allure report which uses xml report): scoop install allure after installing scoop and powershell >= 3

To run: 

-> To run the tests (should be run in the location where the RegistrationPage_test.js is found): codeceptjs run --reporter mocha-junit-reporter
-> To run allure report (make sure you have xml report in './output'): allure serve /path/to/project/output/

References:

https://codecept.io/
https://docs.qameta.io/allure/latest/#_report_structure