package com.example.food.models;

import javax.persistence.*;
import java.util.Collection;
import java.util.List;

@Entity
public class Orders {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long restaurantId;
    private String username;
    private String restaurantName;
    @ManyToMany(cascade = {CascadeType.ALL})
    private List<FoodOrder> foodItemOrder;

    public String getUsername(){
        return username;
    }

    public long getRestaurantId(){
        return restaurantId;
    }
    public String getRestaurantName(){
        return restaurantName;
    }
    public List<FoodOrder> getFoodItemOrder(){
        return foodItemOrder;
    }


}
