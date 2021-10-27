package com.example.food.service;

import com.example.food.models.FoodItem;
import com.example.food.models.Restaurant;

import java.util.List;

public interface RestaurantService {
    public default Restaurant addRestaurant(Restaurant restaurant) {
        return null;
    }

    public Restaurant addFoodItem(String restaurantName, FoodItem foodItem);

    public List<Restaurant> getRestaurant();
}
