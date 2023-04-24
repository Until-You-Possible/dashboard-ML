package com.machine.learning.dashboard.Model;


import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "iris")
@Data
public class IrisModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "sepal_width")
    private Double sepal_width;

    @Column(name = "sepal_length")
    private Double sepal_length;

    @Column(name = "petal_width")
    private Double petal_width;

    @Column(name = "petal_length")
    private Double petal_length;

    @Column(name = "species")
    private String species;
}
