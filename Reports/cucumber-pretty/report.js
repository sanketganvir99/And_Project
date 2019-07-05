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
formatter.step({
  "line": 12,
  "name": "I tap on Identifier \"btn_login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.i_launch_the_application()"
});
formatter.result({
  "duration": 17447889254,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_wait_for_page_to_load()"
});
formatter.result({
  "duration": 5000003413,
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
  "duration": 698848115,
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
  "duration": 711580975,
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
  "duration": 6995418173,
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
  "duration": 711194131,
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
  "duration": 5794223962,
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
  "duration": 867191296,
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
  "duration": 10146463164,
  "error_message": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters.\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027DESKTOP-NV8EM8G\u0027, ip: \u0027192.168.0.102\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: C:\\Users\\sanke\\git\\And_Proj..., appActivity: com.yml.loreal.features.spl..., appPackage: com.saloncentric.app, appWaitActivity: com.yml.loreal.features.spl..., appWaitPackage: com.saloncentric.app, browserName: , databaseEnabled: false, desired: {app: C:\\Users\\sanke\\git\\And_Proj..., appPackage: com.saloncentric.app, browserName: , deviceName: Vivo, fullReset: true, platformName: android, platformVersion: 7.1.2}, deviceManufacturer: vivo, deviceModel: vivo 1611, deviceName: af54d467, deviceScreenSize: 1080x1920, deviceUDID: af54d467, fullReset: true, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, platform: LINUX, platformName: Android, platformVersion: 7.1.2, takesScreenshot: true, warnings: {}, webStorageEnabled: false}\nSession ID: a6c1c027-0170-4569-b466-a931375efcb9\n*** Element info: {Using\u003did, value\u003dbtn_login}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:231)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:62)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:363)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementById(DefaultGenericMobileDriver.java:70)\r\n\tat io.appium.java_client.AppiumDriver.findElementById(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElementById(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:58)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat Step_Definitions.Steps.i_tap_on_identifier(Steps.java:62)\r\n\tat ✽.Then I tap on Identifier \"btn_login\"(Login.feature:12)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1252131910,
  "status": "passed"
});
});