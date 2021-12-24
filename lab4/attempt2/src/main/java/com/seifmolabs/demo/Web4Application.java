package com.seifmolabs.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication(scanBasePackages={"com.seifmolabs.demo.points", "com.seifmolabs.demo.controller",
        "com.seifmolabs.demo.users", "com.seifmolabs.demo.config"})

//@EntityScan("com.seifmolabs.demo.points", "com.seifmolabs.demo.users")
public class Web4Application {

    public static void main(String[] args) {
        SpringApplication.run(Web4Application.class, args);
    }

}
