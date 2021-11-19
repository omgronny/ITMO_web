package beans;

import model.*;

import javax.annotation.PostConstruct;
import javax.faces.bean.ApplicationScoped;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ManagedProperty;
import javax.faces.bean.SessionScoped;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;


@ManagedBean
@SessionScoped
public class HelloBean  {

    private PointsTable pointsTable = new PointsTable();

    private List<PointsTable> pointsTableList = new LinkedList<>();

    @ManagedProperty(value = "#{resourceBean}")
    private PointsCRUD pointsCRUD;

    @PostConstruct
    public void init() {
        pointsTableList = pointsCRUD.getAll();
    }

//    private PointsCRUD pointsCRUD = new PointsCRUD();
//    {
//        pointsTableList = pointsCRUD.getAll();
//    }

    public void addPoint() {
        result();
        pointsCRUD.save(pointsTable);
        pointsTableList.add(0, pointsTable);
        pointsTable = new PointsTable();
    }

    public PointsTable getPointsTable() {
        return pointsTable;
    }

    public void setPointsTable(PointsTable pointsTable) {
        this.pointsTable = pointsTable;
    }

    public List<PointsTable> getPointsTableList() {
        return pointsTableList;
    }

    public void setPointsTableList(List<PointsTable> pointsTableList) {
        this.pointsTableList = pointsTableList;
    }

    public PointsCRUD getPointsCRUD() {
        return pointsCRUD;
    }

    public void setPointsCRUD(PointsCRUD pointsCRUD) {
        this.pointsCRUD = pointsCRUD;
    }

    public boolean validator() {

        double r = pointsTable.getR();
        double x = pointsTable.getX();
        double y = pointsTable.getY();

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
        this.pointsTable.setResult(validator() ? "Point hit the area" : "Point did not hit the area");
    }

    public void clean() {
        // System.out.println(dataBaseManager.removeAllPoints());
        pointsTableList.forEach(pointsTable1 -> pointsCRUD.delete(pointsTable1));
        pointsTableList = new LinkedList<>();
    }



}