package Cucumber_Options;

import java.io.File;

import org.junit.AfterClass;
import org.junit.runner.RunWith;


import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/java/Features", glue = "Step_Definitions", monochrome = true, strict = true, 
		plugin = {
		"pretty:STDOUT", "html:Reports/cucumber-pretty", "json:Reports/cucumber-json/cucumber.json",
		"junit:Reports/cucumber-junit/cukes.xml",
		"com.cucumber.listener.ExtentCucumberFormatter:Reports/cucumber-extent/report.html" })

public class TestRunner {

	@AfterClass
	public static void reportSetup() {

		 Reporter.loadXMLConfig(new
		 File("src/test/java/android_extent-config.xml"));

		 Reporter.setSystemInfo("Platform name", "Android");
		 Reporter.setSystemInfo("Platform version", "7.1.2");
		 
		 
	}

} 
		 
		 
//		 ExtentCucumberFormatter.initiateExtentCucumberFormatter();
//		 ExtentCucumberFormatter.loadConfig(new
//		 File("src/test/java/android_extent-config.xml"));
//		 ExtentCucumberFormatter.addSystemInfo("Platform Name", "Android");
//		 ExtentCucumberFormatter.addSystemInfo("Platform Version", "7.1.2");
//		 ExtentCucumberFormatter.addSystemInfo("Device Name", "Vivo");
	
