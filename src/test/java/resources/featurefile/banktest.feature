@smoke

Feature: Bank Test

  As a user I should able to open account, login and logout, deposite
  and withdraw money successfully

  Background: I am on homepage


    Scenario:    User should able to add customer successfully
      Given      I click on bank manager login tab
      When       I click on customer tab
      And        I input first name "Vicky"
      And        I input last name "Patel"
      And        I input postcode "GH1 4FG"
      Then       I click on customer Btn



    Scenario:    User should able open account successfully
      Given      I click on bank manager login tab
      When       I click on open  account tab
      And        I click on customer created first "Harry Potter"
      And        I click on currency "Pound"
      Then       I click on process button


    Scenario:    User should able to login and logout successfully
      Given      I click on customer login tab
      When       I click on search customer "Harry Potter"
      And        I click on login button
      And        I click on logout button
      Then       I verify text Your name


    Scenario:    User should able deposit money successfully
      Given      I click on customer login tab
      When       I click on search customer "Harry Potter"
      And        I click on login button
      And        I click on deposit button
      And        I input amount field "100"
      And        I click on deposit
      Then       I verify text


    Scenario:    User should able to withdraw money successfully
      Given      I click on customer login tab
      When       I click on search customer "Harry Potter"
      And        I click on login button
      And        I click on withdraw button
      And        I input fill amount field "10"
      And        I click on withdraw
      Then       I verify text amount withdraw

