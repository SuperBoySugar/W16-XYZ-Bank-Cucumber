package com.bank.steps;

import com.bank.pages.AccountPage;
import com.bank.pages.BankManagerLoginPage;
import com.bank.pages.CustomerLoginPage;
import com.bank.pages.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class BankTest {
    @Given("^I click on bank manager login tab$")
    public void iClickOnBankManagerLoginTab() {
        new HomePage().clickOnBankManagerLoginTab();
    }

    @When("^I click on customer tab$")
    public void iClickOnCustomerTab() {
        new BankManagerLoginPage().clickOnAddCustomerTab();
    }

    @And("^I input first name \"([^\"]*)\"$")
    public void iInputFirstName(String firstname)  {
        new BankManagerLoginPage().inputFirstName(firstname);

    }

    @And("^I input last name \"([^\"]*)\"$")
    public void iInputLastName(String lastname)  {
        new BankManagerLoginPage().inputLastName(lastname);

    }

    @And("^I input postcode \"([^\"]*)\"$")
    public void iInputPostcode(String postcode)  {
        new BankManagerLoginPage().inputPostCode(postcode);

    }

    @Then("^I click on customer Btn$")
    public void iClickOnCustomerBtn() {
        new BankManagerLoginPage().clickOnAddCustomerBtn();
    }

    @When("^I click on open  account tab$")
    public void iClickOnOpenAccountTab() {
        new BankManagerLoginPage().clickOnOpenAccountTab();
    }

    @And("^I click on customer created first \"([^\"]*)\"$")
    public void iClickOnCustomerCreatedFirst(String searchCustomer)  {
        new BankManagerLoginPage().clickOnCustomerCreatedFirst(searchCustomer);

    }

    @And("^I click on currency \"([^\"]*)\"$")
    public void iClickOnCurrency(String currency)  {
        new BankManagerLoginPage().clickOnCurrency(currency);

    }

    @Then("^I click on process button$")
    public void iClickOnProcessButton() {
        new BankManagerLoginPage().clickOnProcessBtn();
    }

    @Given("^I click on customer login tab$")
    public void iClickOnCustomerLoginTab() {
        new HomePage().clickOnCustomerLoginTab();
    }

    @When("^I click on search customer \"([^\"]*)\"$")
    public void iClickOnSearchCustomer(String searchCustomer)  {
        new CustomerLoginPage().clickOnSearchCustomer(searchCustomer);

    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() {
        new CustomerLoginPage().clickOnLoginBtn();
    }

    @And("^I click on logout button$")
    public void iClickOnLogoutButton() {
        new AccountPage().clickOnLogoutBtn();
    }





    @Then("^I verify text Your name$")
    public void iVerifyTextYourName() {
        new AccountPage().verifyTextYourName();
    }


    @And("^I click on deposit button$")
    public void iClickOnDepositButton() {
        new AccountPage().clickOnDepositBtn();
    }

    @And("^I input amount field \"([^\"]*)\"$")
    public void iInputAmountField(String amount) {
        new AccountPage().inputAmountField(amount);

    }

    @And("^I click on deposit$")
    public void iClickOnDeposit() {
        new AccountPage().clickOnDeposit();
    }

    @Then("^I verify text$")
    public void iVerifyText() {
        new AccountPage().verifyText();
    }

    @And("^I click on withdraw button$")
    public void iClickOnWithdrawButton() {
        new AccountPage().clickOnWithdrawBtn();
    }

    @And("^I input fill amount field \"([^\"]*)\"$")
    public void iInputFillAmountField(String fillAmount)  {
        new AccountPage().inputFillAmountField(fillAmount);

    }

    @And("^I click on withdraw$")
    public void iClickOnWithdraw() {
        new AccountPage().clickonWithraw();
    }

    @Then("^I verify text amount withdraw$")
    public void iVerifyTextAmountWithdraw() {
        new AccountPage().verifyTextAmountWithdraw();
    }
}
