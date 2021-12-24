package com.seifmolabs.demo.users;

import com.seifmolabs.demo.points.Points;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserJPA extends JpaRepository<Users, Long> {
    Users findByUsername(String username);
}
