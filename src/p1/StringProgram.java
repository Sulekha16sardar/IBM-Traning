package p1;

public class StringProgram {

	public static void main(String[] args) {
		String str="My first java program";
		String str2="My second java program";
		//System.out.println(str.contains("java"));
		//System.out.println(str.substring(8));
		System.out.println(String.join(";" ,str2));
		System.out.println(str.replace("java", "python"));
		System.out.println(str.charAt(5));
		System.out.println(str.indexOf("m"));
		
		//palindrom
		String xyz="madam";
		int left=0;
		int right=xyz.length()-1;
		while(left<right) {
			if(xyz.charAt(left)!=xyz.charAt(right)) {
				System.out.println("Not palindrome");
			}
			else {
				System.out.println("palindrome");
			}
			left++;
			right++;
		}
		

	}

}
