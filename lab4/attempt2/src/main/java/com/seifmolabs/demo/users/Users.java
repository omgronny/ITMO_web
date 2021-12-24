package com.seifmolabs.demo.users;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.Collection;

@Entity
@Table(name = "users")
public class Users implements UserDetails {       //implements UserDetails

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "username")
    private String username;

    @Column(name = "psw")
    private String psw;

    public Users() { }

    public Users(String username, String psw) {
        this.username = username;
        this.psw = psw;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPsw() {
        return psw;
    }

    public void setPsw(String psw) {
        this.psw = psw;
    }

    @Override
    public String toString() {
        return "{\"username\": \"" + this.username + "\", " +
                "\"psw\": \"" + this.psw + "\", " +
                "\"id\": \"" + this.id + "\"}";
    }

    private long polinomialHash(String str) {
        long hash = 0;

        for (int i = 0; i < str.length(); ++i) {
            hash += ((int) str.charAt(i)) * Math.pow((long) Math.pow(10, 9) + 7, i);
        }

        return hash;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getPassword() {
        return this.psw;
    }

    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }



}
