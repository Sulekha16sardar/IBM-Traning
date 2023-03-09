package p2;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.awt.List;
import java.util.Collection;

import io.restassured.RestAssured;
import io.restassured.http.Header;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.response.ResponseBody;
import io.restassured.specification.RequestSpecification;

public class RestAssuredExp {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		RestAssured.baseURI="http://universities.hipolabs.com/search?";
		RequestSpecification myrequest=RestAssured.given();
		myrequest.queryParam("country", "india");
		Response res=myrequest.get("");
		int statuscode=res.getStatusCode();
		System.out.println(statuscode);
		assertEquals(200, statuscode);
		System.out.println(res.getStatusLine());
		JsonPath responsePath=res.jsonPath();
		Collection<Object> countries=responsePath.getList("country");
		System.out.println(res.getBody().asString());
		
		/*res.headers();
		for (Header hd  : res.headers()) {
			System.out.println("name" + hd.getName());
			System.out.println("value" +hd.getValue());
			
		}
		ResponseBody resbody=res.getBody();
		JsonPath responsePath=res.jsonPath();
		String myname=responsePath.get("name");
		System.out.println(resbody.asString());
		assertEquals(resbody.asString().contains("shiv"),true);
		
		String gender=responsePath.get("gender");
		assertEquals("male", gender);
		
		
		
		
		*/

	}

}
