package com.bank.pages;

import com.bank.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.support.PageFactory;

public class AccountPage extends Utility {
    private static final Logger log = LogManager.getLogger(AccountPage.class.getName());

    public AccountPage() {
        PageFactory.initElements(driver, this);
    }



    By logoutBtn = By.xpath("//button[text()='Logout']");
    By yourName = By.cssSelector("div[class='form-group'] label");
    By depositBtn = By.xpath("//button[normalize-space()='Deposit']");
    By amountField = By.xpath("//input[@placeholder='amount']");
    By deposit = By.xpath("//button[text()='Deposit']");
    By depositMessage = By.xpath("//span[text()='Deposit Successful']");
    By withdrawBtn = By.xpath("//button[normalize-space()='Withdrawl']");
    By fillAmount = By.cssSelector("input[placeholder='amount']");
    By withdraw = By.xpath("//button[normalize-space()='Withdraw']");
    By withdrawText = By.xpath("//label[text()='Amount to be Withdrawn :']");

    public void verifyTextLogout(){
        log.info("Verify Text Logout: " .toString() );
        verifyText("Logout",logoutBtn,"text is not display");
    }
    public void clickOnLogoutBtn(){
        log.info("Click On Logout: " .toString() );
        pmClickOnElement(logoutBtn);
    }
    //verify text Your Name
    public void verifyTextYourName(){
        log.info("Verify Text your name: " .toString() );
        verifyText("Your Name :",yourName,"text not displayed");
    }
    // click On Deposit
    public void clickOnDepositBtn(){
        log.info("Click On deposit: " .toString() );
        pmClickOnElement(depositBtn);

    }
    //Enter amount 100
    public void inputAmountField(String amount1){
        log.info("Input amount field: " .toString() );
        sendTextToElement(amountField,amount1);
    }
    //click on "Deposit" Button
    public void clickOnDeposit(){
        log.info("Click On Deposit: " .toString() );
        pmClickOnElement(deposit);
    }
    // verify message "Deposit Successful"
    public void verifyText(){
        log.info("Verify Text: " .toString() );
        verifyText("Deposit Successful",depositMessage,"money is deposited");
    }
    //  //click on "Withdraw" Tab
    public void clickOnWithdrawBtn(){
        log.info("Click on withdraw btn: " .toString() );
        pmClickOnElement(withdrawBtn);
    }
    //  // Enter amount 50
    public void inputFillAmountField(String fillAmount1){
        log.info("input fill amount: " .toString() );
        sendTextToElement(fillAmount,fillAmount1);
    }
    // click on Withdraw
    public void clickonWithraw(){
        log.info("Click on withdraw: " .toString() );
        pmClickOnElement(withdraw);
    }
    // verify Text withdraw Succesful
    public void verifyTextAmountWithdraw(){
        log.info("Verify  Text Amount Withdraw: " .toString() );
        verifyText("Transaction successful\n" +
                "Amount to be Withdrawn :",withdrawText,"text is not display");
    }

}
