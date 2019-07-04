Feature: Login

Scenario: Verify the user is able to login with valid credentials
Given I launch the application
Then I wait for page to load
Then I tap on identifier "tv_skip"
Then I tap on identifier "et_login_email"   
Then I Enter "sc32@loreal.com" in identifier "et_login_email"
Then I tap on identifier "et_login_password"
Then I Enter "Loreal123" in identifier "et_login_password"
Then I tap on identifier "btn_login"



