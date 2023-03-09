package p1;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Set;
import io.cucumber.java.en.Given;


public class ArraylistProgram {

	public static void main(String[] args) {
		ArrayList<String> myList=new ArrayList<String>();
		myList.add("Sulekha1");
		myList.add("Saisha1");
		myList.add("Janvi");
		myList.add("Arati");
		System.out.println(myList);
		myList.add("Shiv");
		myList.add("Gaurav");
		System.out.println(myList);
		myList.add("Mayuri");
		myList.add("pooja");
		myList.remove("Sulekha");
		myList.remove("Pooja");
		System.out.println(myList);
		

	
//set class
	Set<String> hs=new HashSet<String>();
	hs.add("Sulekha");
	hs.add("Sanika");
	hs.add("Sulekha");
	System.out.println(hs);
	
	//Hashmap
	HashMap<Integer, String> hm=new HashMap<Integer,String>();
	hm.put(1, "one");
	hm.put(2, "Two");
	hm.put(3, "Three");
	System.out.println(hm);
	System.out.println(hm.get(1));
	System.out.println(hm.get(3));
	
	
	
}}
