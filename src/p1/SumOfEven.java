package p1;

public class SumOfEven {

	public static void main(String[] args) {
		int a[]= {10,20,35,45,50};
		int sum=0;
		for(int i=0;i<a.length;i++) {
			if(a[i]%2==0){
			sum=sum+a[i];	
			}
			///sum=sum+a[i];
			
			}
	System.out.println("Sum is "+sum);

	}

}
