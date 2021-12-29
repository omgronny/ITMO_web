package com.seifmolabs.demo.controller;

import com.seifmolabs.demo.points.PointJPA;
import com.seifmolabs.demo.users.Users;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import com.seifmolabs.demo.points.Points;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;

import static com.seifmolabs.demo.config.RestAuthenticationEntryPoint.isRequestFromAuthenticatedUser;


@RestController
public class PointController {

    private final PointJPA pointJPA;

    @Autowired
    public PointController (PointJPA pointJPA) {
        this.pointJPA = pointJPA;
    }

    @PostMapping(value = "message")
    public ResponseEntity<?> save(@AuthenticationPrincipal Users user,
                                  @RequestBody Points point) {

        if (!isRequestFromAuthenticatedUser()) {
            throw new ForbiddenException();
        }

        System.out.println("Попали в create points");

        point.setAuthor(user);
        point.setResult();
        point.setId();
        pointJPA.save(point);

        return new ResponseEntity<>(point, HttpStatus.OK);

    }

    @GetMapping(value = "message")
    public ResponseEntity<List<Points>> read() {

        if (!isRequestFromAuthenticatedUser()) {
            throw new ForbiddenException();
        }

        System.out.println("Попали в read points");

        return new ResponseEntity<>(pointJPA.findAll(), HttpStatus.OK);

    }


}