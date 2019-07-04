package Cucumber_Options;

import java.io.File;

import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.ExtentCucumberFormatter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/java/Features",
		glue = "Step_Definitions",
		monochrome=true,
		strict=true,
		plugin = {"pretty","html:target/cucumberReports","json:target/cucumberReports.json","junit:target/cukes.xml","com.cucumber.listener.ExtentCucumberFormatter"}
		)

public class TestRunner {
	
	@BeforeClass
	public static void ExtentReport(){
		
		ExtentCucumberFormatter.initiateExtentCucumberFormatter();
		ExtentCucumberFormatter.loadConfig(new File("src/test/java/android_extent-config.xml"));
		ExtentCucumberFormatter.addSystemInfo("Platform Name", "Android");
		ExtentCucumberFormatter.addSystemInfo("Platform Version", "7.1.2");
		ExtentCucumberFormatter.addSystemInfo("Device Name", "Vivo");
	}

}
