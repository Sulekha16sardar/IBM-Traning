package p2;

public class AccessModifierPrograme {

	public static void main(String[] args) {
	//System.out.println(x);	
A a=new A();
System.out.println(a.y);
System.out.println(a.z);
System.out.println(a.a);
a.callMe();


	}
	

}
class A{
	private int x=10;
	public int y=20;
	int z=30;
	protected int a=40;
	public void callMe() {
		System.out.println(x);
	}
	
}
