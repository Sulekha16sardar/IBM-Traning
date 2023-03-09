package p1;

public class ReverseProgram {

	public static void main(String[] args) {
		String str="Sulekha";
		String rev="";
		for(int i= str.length()-1;i>=0;i--) {
			rev=rev+str.charAt(i);
		//	System.out.println(rev);
		}
System.out.print(rev);
	}

}
