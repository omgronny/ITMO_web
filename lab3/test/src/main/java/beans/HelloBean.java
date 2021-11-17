package beans;


import model.DataBaseManager;
import points.ValidPoint;

import javax.faces.bean.ApplicationScoped;
import javax.faces.bean.ManagedBean;
import java.sql.SQLException;
import java.util.ArrayList;

@ManagedBean
@ApplicationScoped
public class HelloBean  {

    private ValidPoint validPoint = new ValidPoint();

    private DataBaseManager dataBaseManager = new DataBaseManager();

    private ArrayList<ValidPoint> validPoints;

    private PointsCRUD pointsCRUD;

    {
        try {
            validPoints = pointsCRUD.getAll();
        } catch (SQLException throwable) {
            throwable.printStackTrace();
        }
    }

    public void addPoint() {
        result();
        System.out.println(validPoint.getX() + " " + validPoint.getY());
        validPoints.add(0, validPoint);
        pointsCRUD.addPoint(validPoint);
        validPoint = new ValidPoint();
    }

    public ValidPoint getValidPoint() {
        return validPoint;
    }

    public void setValidPoint(ValidPoint validPoint) {
        this.validPoint = validPoint;
    }

    public ArrayList<ValidPoint> getValidPoints() {
        return validPoints;
    }

    public void setValidPoints(ArrayList<ValidPoint> validPoints) {
        this.validPoints = validPoints;
    }

    public boolean validator() {

        double r = validPoint.getR();
        double x = validPoint.getX();
        double y = validPoint.getY();

        System.out.println(x + " " + y + " " + r);

        if (x >= 0 && y >= 0) {
            return x + y <= r;
        } else if (x < 0 && y >= 0) {
            return x*x + y*y <= r*r;
        } else if (x < 0 && y < 0) {
            return (-1)*x <= r && (-1)*y <= r/2;
        }

        return false;

    }

    public void result() {
        this.validPoint.setResult(validator() ? "Point hit the area" : "Point did not hit the area");
    }

    public void clean() {
        validPoints = new ArrayList<>();
    }



}