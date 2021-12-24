package com.seifmolabs.demo.controller;

import com.seifmolabs.demo.config.Encode;
import com.seifmolabs.demo.points.Points;
import com.seifmolabs.demo.users.UserJPA;
import com.seifmolabs.demo.users.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.Map;

@Controller
public class UserController {

    @Autowired
    private UserJPA userJPA;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping(value = "/result")
    public String save() {
        System.out.println("Попали в logout");
        SecurityContextHolder.clearContext();
        return "login";
    }

    @PostMapping(value = "/")
    public String rootSave() {
        return save();
    }


    @GetMapping(value = "/")
    public String rootRead() {
        return read();
    }

    @GetMapping(value = "/result")
    public String read() {

        System.out.println("Попали в read users");

        return "result";

    }

    @GetMapping(value = "/registration")
    public String registration() {
        return "registration";
    }

    @PostMapping(value = "/registration")
    public String addUser(Users user, Map<String, Object> model) {

        Users newUser = userJPA.findByUsername(user.getUsername());

        if (newUser != null) {
            model.put("message", "User exists!");
            return "registration";
        }

        user.setPsw(passwordEncoder.encode(user.getPsw()));
        userJPA.save(user);

        return "redirect:/login";

    }

}
