Feature: Login

Scenario: Verify the user is able to login with valid credentials
Given I launch the application
Then I wait for page to load
Then I tap on Identifier "tv_skip"
Then I tap on Identifier "et_login_email"   
Then I Enter "sc32@loreal.com" in Identifier "et_login_email"
Then I tap on Identifier "et_login_password"
Then I Enter "Loreal123" in Identifier "et_login_password"
Then I tap on Identifier "btn_login"
Then I tap on Identifier "btn_login"



