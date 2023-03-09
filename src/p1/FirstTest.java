package p1;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class FirstTest {

	@Test
	void test() {
		//System.out.println("pass");
		Calculator c=new Calculator();
		int value=c.sum(3, 5);
		assertEquals(10, value);
	}

}
