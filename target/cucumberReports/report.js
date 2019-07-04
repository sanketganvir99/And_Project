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
  "name": "I tap on identifier \"ans!@#123\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I Enter \"ajkbd!@322\" in identifier \"absd!@3222\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I Enter \"ajkbd!@322\" in identifier \"absd!@3222\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I tap on identifier \"ans123!@#\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.i_launch_the_application()"
});
formatter.result({
  "duration": 21005732688,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_wait_for_page_to_load()"
});
formatter.result({
  "duration": 5001285119,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "ajkbd!@322",
      "offset": 9
    },
    {
      "val": "absd!@3222",
      "offset": 36
    }
  ],
  "location": "Steps.i_enter_something_in_identifier_something(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ajkbd!@322",
      "offset": 9
    },
    {
      "val": "absd!@3222",
      "offset": 36
    }
  ],
  "location": "Steps.i_enter_something_in_identifier_something(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});