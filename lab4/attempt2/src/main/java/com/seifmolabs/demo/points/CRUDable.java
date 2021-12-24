package com.seifmolabs.demo.points;

import java.util.List;

public interface CRUDable {

    void save(Points point) throws Exception;
    List<Points> getAll();
    void delete(Points point);

}
