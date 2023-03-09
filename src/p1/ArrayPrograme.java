package p1;

public class ArrayPrograme {

	public static void main(String[] args) {
		/*
		 * int a[]=new int[3]; a[0]=10; a[1]=20; a[2]=30;
		 */
		// a[3]=40;
		// a[4]=50;
		// System.out.println(a);

		// Sum of all number
		int a[] = { 10, 20, 35, 45, 50 };
		int sum = 0;
		for (int i = 0; i < a.length; i++) {
			sum = sum + a[i];

		}
		System.out.println("Sum is " + sum);

	}
}
