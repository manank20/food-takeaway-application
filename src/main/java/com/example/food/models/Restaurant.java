package com.example.food.models;

import javax.persistence.*;
import java.util.List;

@Entity
public class Restaurant {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long restaurantId;
    private String restaurantName;
    @OneToMany(cascade = {CascadeType.ALL})
    private List<FoodItem> foodItems;

    public long getRestaurantId() {
        return restaurantId;
    }

    public void setRestaurantId(long restaurantId) {
        this.restaurantId = restaurantId;
    }

    public String getRestaurantName() {
        return restaurantName;
    }

    public void setRestaurantName(String restaurantName) {
        this.restaurantName = restaurantName;
    }

    public List<FoodItem> getFoodItems() {
        return foodItems;
    }

    public void setFoodItems(FoodItem foodItems) {
        this.foodItems.add(foodItems);
    }

    public Restaurant(long restaurantId, String restaurantName, List<FoodItem> foodItems) {
        this.restaurantId = restaurantId;
        this.restaurantName = restaurantName;
        this.foodItems = foodItems;
    }

    public Restaurant() {

    }

    @Override
    public String toString() {
        return "restaurant{" +
                "restaurantId=" + restaurantId +
                ", restaurantName='" + restaurantName + '\'' +
                ", foodItems=" + foodItems.toString() +
                '}';
    }

}
