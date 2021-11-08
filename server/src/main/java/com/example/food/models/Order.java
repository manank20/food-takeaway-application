package com.example.food.models;

import javax.persistence.*;
import java.util.List;

@Entity
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long restaurantId;
    private String username;
    @ManyToMany(cascade = {CascadeType.ALL})
    private List<FoodOrder> foodItemOrder;


}
