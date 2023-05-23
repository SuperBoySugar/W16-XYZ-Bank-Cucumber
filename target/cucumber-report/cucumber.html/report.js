$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("banktest.feature");
formatter.feature({
  "line": 1,
  "name": "Bank Test",
  "description": "\r\nAs a user I should able to open account, login and logout, deposite\r\nand withdraw money successfully",
  "id": "bank-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2879243400,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 9,
  "name": "User should able to add customer successfully",
  "description": "",
  "id": "bank-test;user-should-able-to-add-customer-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I click on bank manager login tab",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on customer tab",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I input first name \"Vicky\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I input last name \"Patel\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I input postcode \"GH1 4FG\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on customer Btn",
  "keyword": "Then "
});
formatter.match({
  "location": "BankTest.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 285858000,
  "status": "passed"
});
formatter.match({
  "location": "BankTest.iClickOnCustomerTab()"
});
formatter.result({
  "duration": 214585500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vicky",
      "offset": 20
    }
  ],
  "location": "BankTest.iInputFirstName(String)"
});
formatter.result({
  "duration": 251209600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Patel",
      "offset": 19
    }
  ],
  "location": "BankTest.iInputLastName(String)"
});
formatter.result({
  "duration": 40707400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GH1 4FG",
      "offset": 18
    }
  ],
  "location": "BankTest.iInputPostcode(String)"
});
formatter.result({
  "duration": 44904500,
  "status": "passed"
});
formatter.match({
  "location": "BankTest.iClickOnCustomerBtn()"
});
formatter.result({
  "duration": 24521900,
  "status": "passed"
});
formatter.after({
  "duration": 67400,
  "status": "passed"
});
formatter.before({
  "duration": 1764208900,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 19,
  "name": "User should able open account successfully",
  "description": "",
  "id": "bank-test;user-should-able-open-account-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "I click on bank manager login tab",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I click on open  account tab",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I click on customer created first \"Harry Potter\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on currency \"Pound\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on process button",
  "keyword": "Then "
});
formatter.match({
  "location": "BankTest.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 353001700,
  "status": "passed"
});
formatter.match({
  "location": "BankTest.iClickOnOpenAccountTab()"
});
formatter.result({
  "duration": 191908800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 35
    }
  ],
  "location": "BankTest.iClickOnCustomerCreatedFirst(String)"
});
formatter.result({
  "duration": 355117700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pound",
      "offset": 21
    }
  ],
  "location": "BankTest.iClickOnCurrency(String)"
});
formatter.result({
  "duration": 165261200,
  "status": "passed"
});
formatter.match({
  "location": "BankTest.iClickOnProcessButton()"
});
formatter.result({
  "duration": 35506000,
  "status": "passed"
});
formatter.after({
  "duration": 18400,
  "status": "passed"
});
formatter.before({
  "duration": 1827207100,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 27,
  "name": "User should able to login and logout successfully",
  "description": "",
  "id": "bank-test;user-should-able-to-login-and-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "I click on customer login tab",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I click on search customer \"Harry Potter\"",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on logout button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I verify text Your name",
  "keyword": "Then "
});
formatter.match({
  "location": "BankTest.iClickOnCustomerLoginTab()"
});
formatter.result({
  "duration": 353934500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 28
    }
  ],
  "location": "BankTest.iClickOnSearchCustomer(String)"
});
formatter.result({
  "duration": 269876500,
  "status": "passed"
});
formatter.match({
  "location": "BankTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 62167700,
  "status": "passed"
});
formatter.match({
  "location": "BankTest.iClickOnLogoutButton()"
});
formatter.result({
  "duration": 163430600,
  "status": "passed"
});
formatter.match({
  "location": "BankTest.iVerifyTextYourName()"
});
formatter.result({
  "duration": 20412900,
  "status": "passed"
});
formatter.after({
  "duration": 21900,
  "status": "passed"
});
formatter.before({
  "duration": 1802714100,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 35,
  "name": "User should able deposit money successfully",
  "description": "",
  "id": "bank-test;user-should-able-deposit-money-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 34,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "I click on customer login tab",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I click on search customer \"Harry Potter\"",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on deposit button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I input amount field \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click on deposit",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I verify text",
  "keyword": "Then "
});
formatter.match({
  "location": "BankTest.iClickOnCustomerLoginTab()"
});
formatter.result({
  "duration": 419556600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 28
    }
  ],
  "location": "BankTest.iClickOnSearchCustomer(String)"
});
formatter.result({
  "duration": 284852100,
  "status": "passed"
});
formatter.match({
  "location": "BankTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 43068600,
  "status": "passed"
});
formatter.match({
  "location": "BankTest.iClickOnDepositButton()"
});
formatter.result({
  "duration": 231768900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 22
    }
  ],
  "location": "BankTest.iInputAmountField(String)"
});
formatter.result({
  "duration": 221911200,
  "status": "passed"
});
formatter.match({
  "location": "BankTest.iClickOnDeposit()"
});
formatter.result({
  "duration": 34059200,
  "status": "passed"
});
formatter.match({
  "location": "BankTest.iVerifyText()"
});
formatter.result({
  "duration": 16465900,
  "status": "passed"
});
formatter.after({
  "duration": 16000,
  "status": "passed"
});
formatter.before({
  "duration": 1835032500,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 45,
  "name": "User should able to withdraw money successfully",
  "description": "",
  "id": "bank-test;user-should-able-to-withdraw-money-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 46,
  "name": "I click on customer login tab",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "I click on search customer \"Harry Potter\"",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I click on withdraw button",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I input fill amount field \"10\"",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I click on withdraw",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I verify text amount withdraw",
  "keyword": "Then "
});
formatter.match({
  "location": "BankTest.iClickOnCustomerLoginTab()"
});
formatter.result({
  "duration": 353773400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 28
    }
  ],
  "location": "BankTest.iClickOnSearchCustomer(String)"
});
formatter.result({
  "duration": 296300800,
  "status": "passed"
});
formatter.match({
  "location": "BankTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 71280200,
  "status": "passed"
});
formatter.match({
  "location": "BankTest.iClickOnWithdrawButton()"
});
formatter.result({
  "duration": 246070300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 27
    }
  ],
  "location": "BankTest.iInputFillAmountField(String)"
});
formatter.result({
  "duration": 279881900,
  "status": "passed"
});
formatter.match({
  "location": "BankTest.iClickOnWithdraw()"
});
formatter.result({
  "duration": 32281200,
  "status": "passed"
});
formatter.match({
  "location": "BankTest.iVerifyTextAmountWithdraw()"
});
formatter.result({
  "duration": 17334100,
  "error_message": "java.lang.AssertionError: text is not display expected [Transaction successful\nAmount to be Withdrawn :] but found [Amount to be Withdrawn :]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat com.bank.utility.Utility.verifyText(Utility.java:82)\r\n\tat com.bank.pages.AccountPage.verifyTextAmountWithdraw(AccountPage.java:81)\r\n\tat com.bank.steps.BankTest.iVerifyTextAmountWithdraw(BankTest.java:138)\r\n\tat ✽.Then I verify text amount withdraw(banktest.feature:52)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 319644300,
  "status": "passed"
});
});