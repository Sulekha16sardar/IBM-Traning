package p1;

public class ConditionalPrograme {

	public static void main(String[] args) {
		int x=29;
		if(x%3==0) {
			System.out.println("given no is divisible by 3");
		}
		else if(x%5==0){
			System.out.println("given no is divisible by 5");
		}
		else if(x%7==0) {
			System.out.println("given no is divisible by 7");

		}
		else {
			System.out.println(" no is not divisible by 3,5,7");

		}

	}

}
