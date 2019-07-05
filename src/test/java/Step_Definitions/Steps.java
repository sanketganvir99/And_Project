package Step_Definitions;

import java.io.File;
import java.net.URL;
import java.util.concurrent.TimeUnit;

import org.junit.rules.Timeout;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.remote.AndroidMobileCapabilityType;
import io.appium.java_client.remote.MobileCapabilityType;

public class Steps {

	
	private static AndroidDriver Android_Driver;
	
	@Given("^I launch the application$")
    public void i_launch_the_application() throws Throwable {
		
		File App = new File(".\\Application\\SalonCentric-debug-2.7.apk");
    	DesiredCapabilities Capability = new DesiredCapabilities();
    	Capability.setCapability(CapabilityType.BROWSER_NAME, "");
    	Capability.setCapability(MobileCapabilityType.APP, App.getAbsolutePath());
    	Capability.setCapability(MobileCapabilityType.PLATFORM_NAME, "Android");
    	Capability.setCapability(MobileCapabilityType.PLATFORM_VERSION, "7.1.2");
    	Capability.setCapability(MobileCapabilityType.DEVICE_NAME, "Vivo");
    	Capability.setCapability(MobileCapabilityType.FULL_RESET, "true");
    	Capability.setCapability(AndroidMobileCapabilityType.APP_PACKAGE, "com.saloncentric.app");
    	
    	Android_Driver = new AndroidDriver(new URL("http://127.0.0.1:4723/wd/hub"),Capability);
    	
    	Android_Driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
    	
    	System.out.println("Application Launched");
		
        
    }

    @Then("^I wait for page to load$")
    public void i_wait_for_page_to_load() throws Throwable {
    	
    	Thread.sleep(5000);
    	System.out.println("Wait of 5 sec applied");
        
    }

    @Then("^I tap on Identifier \"([^\"]*)\"$")
    public void i_tap_on_identifier(String arg1) throws Throwable {
        
    	Android_Driver.findElement(By.id(arg1)).click();
        
    }

    @Then("^I Enter \"([^\"]*)\" in Identifier \"([^\"]*)\"$")
    public void i_enter_something_in_identifier_something(String strArg1, String strArg2) throws Throwable {
    	
    	Android_Driver.findElement(By.id(strArg2)).sendKeys(strArg1);
        
    }
	
	
    @After
    public void tearDown(Scenario scenario) {
        if (scenario.isFailed()) {
          // Take a screenshot...
          final byte[] screenshot = ((TakesScreenshot) Android_Driver).getScreenshotAs(OutputType.BYTES);
          scenario.embed(screenshot, "image/png"); // ... and embed it in the report.
        }
    }
	
	
	
	
}
