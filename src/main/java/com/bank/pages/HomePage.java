package com.bank.pages;

import com.bank.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.support.PageFactory;

public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    By bankManagerLogin = By.xpath("//button[normalize-space()='Bank Manager Login']");
    By customerLogin = By.xpath("//button[text()='Customer Login']");




    // click On "Bank Manager Login" Tab
    public void clickOnBankManagerLoginTab(){
        log.info("Click On Manager login tab: " .toString() );
        pmClickOnElement(bankManagerLogin);

    }
    // click on "Customer Login" Tab
    public void clickOnCustomerLoginTab(){
        log.info("Click On Customer Login tab: " .toString() );
        pmClickOnElement(customerLogin);

    }



}
