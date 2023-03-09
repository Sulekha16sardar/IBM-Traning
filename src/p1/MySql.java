package p1;
import java.sql.*;

public class MySql {

	public static void main(String[] args) throws ClassNotFoundException, SQLException {
		// TODO Auto-generated method stub
		Class.forName("com.mysql.jdbc.Driver");
		Connection con=DriverManager.getConnection("jdbc:mysql://local host:3306/traning", "root","admin");
		Statement st=con.createStatement();
		ResultSet rs=st.executeQuery("select * from employee");
		while (rs.next()) {
			System.out.println(rs.getString("firstname="));
			System.out.println(rs.getString(3));
			
		}

	}

}
