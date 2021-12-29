package com.seifmolabs.demo.config;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

public class RestAuthenticationEntryPoint {

    public static boolean isRequestFromAuthenticatedUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Object[] roles = authentication.getAuthorities().toArray();

        return roles.length != 1 || !roles[0].toString().equals("ROLE_ANONYMOUS");

    }

}