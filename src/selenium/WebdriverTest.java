package selenium;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class WebdriverTest {

	public static void main(String[] args) throws InterruptedException {
		
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\Student\\eclipse-workspace\\Training_IBM\\Resource\\chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.get("http://tutorialsninja.com/demo/");
		driver.manage().window().maximize();
		driver.findElement(By.xpath("//a[text()=\"iPhone\"]")).click();
		String price=driver.findElement(By.xpath("//h2[contains(text(),'$123.20')]")).getText();
		driver.findElement(By.xpath("//input[@id='input-quantity']")).clear();
		driver.findElement(By.xpath("//input[@id='input-quantity']")).sendKeys("2");
		driver.findElement(By.xpath("//button[@id='button-cart']")).click();
		driver.findElement(By.xpath("//body/div[@id='product-product']/div[1]")).isDisplayed();
		driver.findElement(By.xpath("//header/div[1]/div[1]/div[3]/div[1]/button[1]")).click();
		Thread.sleep(3000);
		driver.findElement(By.xpath("//body[1]/header[1]/div[1]/div[1]/div[3]/div[1]/ul[1]/li[2]/div[1]/p[1]/a[1]/strong[1]")).click();
		

	}

}
