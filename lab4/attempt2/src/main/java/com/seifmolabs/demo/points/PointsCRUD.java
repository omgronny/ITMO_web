package com.seifmolabs.demo.points;

import org.springframework.stereotype.Service;

import java.util.LinkedList;
import java.util.List;

@Service
public class PointsCRUD implements CRUDable {

//    @PersistenceContext(unitName = "postgres")
//    private EntityManager em;
//
//    @Resource
//    private UserTransaction userTransaction;

    LinkedList<Points> pointsList = new LinkedList<>();

    @Override
    public void save(Points point) throws Exception {
//        userTransaction.begin();
//        em.persist(point);
//        userTransaction.commit();
        point.setResult();
        point.setId();
        //pointsList.add(0, point);

    }

    @Override
    public List<Points> getAll() {
//        Query query = em.createQuery("SELECT p FROM Points p");
//        return query.getResultList();
//        return pointsList;

        return pointsList;


    }

    @Override
    public void delete(Points point) {
//        try {
//            userTransaction.begin();
//            em.remove(em.merge(point));
//            userTransaction.commit();
//        } catch (Exception ignore) { }
    }

}
