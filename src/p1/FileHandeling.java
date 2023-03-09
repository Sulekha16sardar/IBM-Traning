package p1;

import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class FileHandeling {

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		File oFile=new File("myfile.txt");
		System.out.println(oFile.exists());
		oFile.createNewFile();
		System.out.println(oFile.getAbsoluteFile());
		FileWriter oWriter=new FileWriter(oFile);
		oWriter.write("writing into file");
		oWriter.write("\n");
		oWriter.close();
		FileReader read=new FileReader(oFile);
		System.out.println(read);
		Scanner oScan=new Scanner(oFile);
		while(oScan.hasNextLine())
		System.out.println(oScan.nextLine());
		

	}

}
