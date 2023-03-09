package p1;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class Second {

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		System.out.println("before class");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		System.out.println("after class");
	}

	@BeforeEach
	void setUp() throws Exception {
		System.out.println("before test");
	}

	@AfterEach
	void tearDown() throws Exception {
		System.out.println("after test");
	}

	@Test
	void test() {
		//fail("Not yet implemented");
		System.out.println("test method");
	}

}
