package com.seifmolabs.demo.points;

import com.seifmolabs.demo.users.Users;

import javax.persistence.*;

@Entity
@Table(name = "points")
public class Points {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "x")
    private double x;

    @Column(name = "y")
    private double y;

    @Column(name = "r")
    private double r;

    @Column(name = "result")
    private String result;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private Users author;

    private static int maxid = 0;

    public Points() { }

    public Points(double x, double y, double r, String result) {
        this.id = ++maxid;
        this.x = x;
        this.y = y;
        this.r = r;
        this.result = result;
    }

    public String getAuthorName() {
        return author != null ? author.getUsername() : "<none>";
    }

    public Users getAuthor() {
        return author;
    }

    public void setAuthor(Users author) {
        this.author = author;
    }

    public int getId() {
        return id;
    }

    public void setId() {
        this.id = ++maxid;
    }

    public double getX() {
        return x;
    }

    public void setX(double x) {
        this.x = x;
    }

    public double getY() {
        return y;
    }

    public void setY(double y) {
        this.y = y;
    }

    public double getR() {
        return r;
    }

    public void setR(double r) {
        this.r = r;
    }

    public String getResult() {
        return result;
    }

    public void setResult() {

        boolean isHit = false;
        if (this.x > 0 && this.y < 0) {
            isHit = ( this.x - this.r ) / 2 < this.y;
        } else if (this.x < 0 &&this.y > 0) {
            isHit = this.x > this.r/(-1) && this.y < this.r/2;
        } else if (this.x < 0 &&this.y < 0) {
            isHit = this.x * this.x + this.y * this.y < this.r * this.r;
        }

        this.result = isHit ? "Point hit the area" : "Point did not hit the area";

    }

    @Override
    public String toString() {

//        Map<String, String> m = new HashMap<>();
//        m.put("k1", "v1");
//        m.put("k2", "v2");
//        m.put("k3", "v3");
//
//        return m.toString();

        return "{" +
                "\"x\": \"" + x +
                "\", \"y\": \"" + y +
                "\", \"r\": \"" + r +
                "\", \"result\": \"" + result + '\"' +
                ", \"id\": \"" + id +
                "\"}";

    }
}
