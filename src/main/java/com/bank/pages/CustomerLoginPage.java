package com.bank.pages;

import com.bank.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.support.PageFactory;

public class CustomerLoginPage extends Utility {
    private static final Logger log = LogManager.getLogger(CustomerLoginPage.class.getName());

    public CustomerLoginPage() {
        PageFactory.initElements(driver, this);
    }


    By searchCustomer = By.id("userSelect");
    By loginBtn = By.xpath("//button[text()='Login']");

    //search customer that you created.
    public void clickOnSearchCustomer(String searchCustomer1){
        log.info("Click On Search customer: " .toString() );
        pmClickOnElement(searchCustomer);
        pmSelectByVisibleTextFromDropDown(searchCustomer,searchCustomer1);

    }
    //click on "Login" Button
    public void clickOnLoginBtn(){
        log.info("Click On Login btn: " .toString() );
        pmClickOnElement(loginBtn);
    }
}
