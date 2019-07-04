$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Verify the user is able to login with valid credentials",
  "description": "",
  "id": "login;verify-the-user-is-able-to-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I wait for page to load",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "I tap on Identifier \"tv_skip\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I tap on Identifier \"et_login_email\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I Enter \"sc32@loreal.com\" in Identifier \"et_login_email\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I tap on Identifier \"et_login_password\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I Enter \"Loreal123\" in Identifier \"et_login_password\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I tap on Identifier \"btn_login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.i_launch_the_application()"
});
formatter.result({
  "duration": 18012774390,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_wait_for_page_to_load()"
});
formatter.result({
  "duration": 5005010200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tv_skip",
      "offset": 21
    }
  ],
  "location": "Steps.i_tap_on_identifier(String)"
});
formatter.result({
  "duration": 766657337,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "et_login_email",
      "offset": 21
    }
  ],
  "location": "Steps.i_tap_on_identifier(String)"
});
formatter.result({
  "duration": 730623945,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sc32@loreal.com",
      "offset": 9
    },
    {
      "val": "et_login_email",
      "offset": 41
    }
  ],
  "location": "Steps.i_enter_something_in_identifier_something(String,String)"
});
formatter.result({
  "duration": 7185190811,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "et_login_password",
      "offset": 21
    }
  ],
  "location": "Steps.i_tap_on_identifier(String)"
});
formatter.result({
  "duration": 655023797,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Loreal123",
      "offset": 9
    },
    {
      "val": "et_login_password",
      "offset": 35
    }
  ],
  "location": "Steps.i_enter_something_in_identifier_something(String,String)"
});
formatter.result({
  "duration": 6409844841,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btn_login",
      "offset": 21
    }
  ],
  "location": "Steps.i_tap_on_identifier(String)"
});
formatter.result({
  "duration": 868619774,
  "status": "passed"
});
});