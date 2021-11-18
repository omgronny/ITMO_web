package model;

import org.postgresql.Driver;
import points.ValidPoint;
import org.postgresql.*;

import java.sql.*;
import java.util.ArrayList;

public class DataBaseManager {


   private static final String DB_URL = "jdbc:postgresql://pg:5432/studs";
   private static String USER = "";
   private static String PASS = "";


    private static final String TABLE_NAME = "POINTS";

    private Connection connection;

    public DataBaseManager() {
        this(DB_URL, USER, PASS);
    }

    public DataBaseManager(String dbUrl, String user, String pass) {
        try {
            connection = DriverManager.getConnection(dbUrl, user, pass);
        } catch (SQLException e) {
            System.out.println("Connection to database failed" + dbUrl +" " + user+ " " + pass);
            e.printStackTrace();
        }

//        try {
//
//            Statement statement = connection.createStatement();
//            statement.executeUpdate("create table POINTS (x real, y real, r real, result VARCHAR(50), id serial);");
//
//        } catch (SQLException e) {
//            System.out.println("Table already exist");
//        }

    }

    public ArrayList<ValidPoint> getCollectionFromDataBase() throws SQLException {

        Statement statement = null;

        try {
            Class.forName("org.postgresql.Driver");
            connection = DriverManager.getConnection(DB_URL, USER, PASS);
            statement = connection.createStatement();
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        } catch (ClassNotFoundException e) {
            System.out.println("sos");
        }

        ResultSet resultSet = statement.executeQuery( "SELECT * FROM POINTS;");

        ArrayList<ValidPoint> collection = new ArrayList<>();
        while (resultSet.next()) {
            ValidPoint point = new ValidPoint();
            point.setX(resultSet.getDouble(1));
            point.setY(resultSet.getDouble(2));
            point.setR(resultSet.getDouble(3));
            point.setResult(resultSet.getString(4));
            collection.add(point);
        }
        return collection;
    }

    public boolean addPoint(double x, double y, double r, String result) {
        try {
            PreparedStatement statement = connection.prepareStatement("insert into " + TABLE_NAME +
                    " values (?, ?, ?, ?);");
            statement.setDouble(1, x);
            statement.setDouble(2, y);
            statement.setDouble(3, r);
            statement.setString(4, result);
            statement.execute();
            return true;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }

    public boolean removeAllPoints() {
        try {
            Statement statement = connection.createStatement();
            statement.executeUpdate("delete from POINTS;");
            return true;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }

    }

}