package model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.criteria.CriteriaQuery;

import org.hibernate.Session;

public class PointsCRUD {

    public void save(PointsTable points) {
        Session session = HibernateUtil.getSessionFactory().openSession();
        session.beginTransaction();
        session.save(points);
        session.flush();
        session.close();
    }

    public void delete(PointsTable points) {
        Session session = HibernateUtil.getSessionFactory().openSession();
        session.beginTransaction();
        session.delete(points);
        session.flush();
        session.close();
    }

    public List<PointsTable> getAll() {
        Session session = HibernateUtil.getSessionFactory().openSession();
        return session.createCriteria(PointsTable.class).list();
    }

    public PointsTable addPoint(PointsTable pointsTable) {
        Session session = HibernateUtil.getSessionFactory().openSession();
        session.beginTransaction();
        pointsTable.setId(null);                // добавить новую запись, а не изменить существующую
        session.save(pointsTable);
        session.flush();
        session.close();
        return pointsTable;
    }

}
