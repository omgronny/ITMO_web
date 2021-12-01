package beans;

import model.*;

import javax.annotation.PostConstruct;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ManagedProperty;
import javax.faces.bean.SessionScoped;
import java.util.LinkedList;
import java.util.List;


@ManagedBean
@SessionScoped
public class PointsBean  {

    private Points pointsTable = new Points();

    private List<Points> pointsTableList = new LinkedList<>();

    @ManagedProperty(value = "#{resourceBean}")
    private PointsCRUD pointsCRUD;

    @PostConstruct
    public void postConstruct() {
        pointsTableList = pointsCRUD.getAll();
    }

    public void addPoint() throws Exception {
        result();
        pointsCRUD.save(pointsTable);
        pointsTableList.add(0, pointsTable);
        pointsTable = new Points();
    }

    public Points getPointsTable() {
        return pointsTable;
    }

    public void setPointsTable(Points pointsTable) {
        this.pointsTable = pointsTable;
    }

    public List<Points> getPointsTableList() {
        return pointsTableList;
    }

    public void setPointsTableList(List<Points> pointsTableList) {
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
       pointsTableList.forEach(pointsTable1 -> pointsCRUD.delete(pointsTable1));
       pointsTableList = new LinkedList<>();
    }



}