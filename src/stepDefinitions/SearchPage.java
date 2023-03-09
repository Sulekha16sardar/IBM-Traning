package stepDefinitions;

import static org.junit.Assert.assertTrue;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.time.Duration;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.After;
import io.cucumber.java.BeforeStep;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class SearchPage {
	public  WebDriver driver;
	
	
	/*@BeforeStep
	public void setUp() {
		System.out.println("set up");
		
	}*/
	
	
	
	
		@Given("user is in Search page")
	public void navigateSearchPage() {
		System.out.println("we are in given section");
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\Student\\eclipse-workspace\\Training_IBM\\Resource\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(30));
		
		driver.get("http://tutorialsninja.com/demo/");
		driver.navigate().to("http://tutorialsninja.com/demo/");
		driver.manage().window().maximize();
		

	}

	@When("user enters {string} product")
	public void enterProduct(String product) throws InterruptedException {
		System.out.println("we are in when section");
		Thread.sleep(3000);
		WebElement searchBox=driver.findElement(By.xpath("//input[@name='search']"));
		boolean t=searchBox.isEnabled();
		System.out.println("Textboox is ="+t);
		searchBox.click();
		searchBox.sendKeys(product);
	}

	@And("Click on Search button")
	public void clickSearch() {
		System.out.println("we are in and section");
		driver.findElement(By.xpath("//header/div[1]/div[1]/div[2]/div[1]/span[1]/button[1]/i[1]")).click();

	}

	@Then("Product {string} should be displayed")
	public void verifyProduct() {
		System.out.println("we are in then section");
		WebElement iphone=driver.findElement(By.xpath("//a[contains(text(),'iPhone')]"));
		iphone.isDisplayed();
		//assertTrue(driver.findElement(By.xpath("//a[contains(text(),'iPhone')]")).isDisplayed()));
		
	}

}
