package com.bank.pages;

import com.bank.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.support.PageFactory;

public class BankManagerLoginPage extends Utility {

    private static final Logger log = LogManager.getLogger(BankManagerLoginPage.class.getName());

    public BankManagerLoginPage() {
        PageFactory.initElements(driver, this);
    }


    By addCustomer = By.xpath("//button[contains(text(),'Add Customer')]");
    By firstName = By.cssSelector("input[placeholder='First Name']");
    By lastName = By.cssSelector("input[placeholder='Last Name']");
    By postCode = By.cssSelector("input[placeholder='Post Code']");
    By addCustomerBtn = By.xpath("//button[@type='submit']");
    By openAccount = By.xpath("//button[contains(text(),'Open Account')]");
    By searchCustomer = By.id("userSelect");
    By currency = By.id("currency");
    By processBtn = By.xpath("//button[text()='Process']");


    // click On "Add Customer" Tab
    public void clickOnAddCustomerTab() {
        log.info("Click On Add Customer: " .toString() );
        pmClickOnElement(addCustomer);
    }

    // enter FirstName
    public void inputFirstName(String firstName1) {
        log.info("Input First name: " .toString() );
        sendTextToElement(firstName, firstName1);
    }

    // enter LastName
    public void inputLastName(String lastName1) {
        log.info("Input Last name: " .toString() );
        sendTextToElement(lastName, lastName1);
    }

    // enter Postcode
    public void inputPostCode(String postCode1) {
        log.info("Input postcode: " .toString() );
        sendTextToElement(postCode, postCode1);
    }

    public void clickOnAddCustomerBtn() {
        log.info("Click On Add Customer btn: " .toString() );
        pmClickOnElement(addCustomer);
    }

    // click On "Open Account" Tab
    public void clickOnOpenAccountTab() {
        log.info("Click On Open Account tab: " .toString() );
        pmClickOnElement(openAccount);

    }
    // Search customer that created in first test
    public void clickOnCustomerCreatedFirst(String searchCustomer1){
        log.info("Click On Customer created first: " .toString() );
        pmClickOnElement(searchCustomer);
       pmSelectByVisibleTextFromDropDown(searchCustomer,searchCustomer1);
    }
    // Select currency "Pound"
    public void clickOnCurrency(String currency1){
        log.info("Click On Currency: " .toString() );
        pmClickOnElement(currency);
        pmSelectByVisibleTextFromDropDown(currency,currency1);
    }
    // click on "process" button
    public void clickOnProcessBtn(){
        log.info("Click On Process Btn: " .toString() );
        pmClickOnElement(processBtn);
    }
    // verify message "Account created successfully

    // click on "ok" button on popup


}