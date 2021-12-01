package model;

import java.util.List;

import javax.annotation.Resource;
import javax.faces.bean.ApplicationScoped;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.RequestScoped;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.UserTransaction;

@ManagedBean(name = "resourceBean")
@ApplicationScoped
public class PointsCRUD {

    @PersistenceContext(unitName = "postgres")
    private EntityManager em;

    @Resource
    private UserTransaction userTransaction;

    public void save(Points points) throws Exception {
        userTransaction.begin();
        em.persist(points);
        userTransaction.commit();
    }

    public List<Points> getAll() {
        Query query = em.createQuery("SELECT p FROM Points p");
        return query.getResultList();
    }

    public void delete(Points point) {
        try {
            userTransaction.begin();
            em.remove(em.merge(point));
            userTransaction.commit();
        } catch (Exception ignore) { }
    }

}
