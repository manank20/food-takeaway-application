package com.example.food.service;

import com.example.food.models.FoodItem;
import com.example.food.models.FoodOrder;
import com.example.food.models.Order;
import com.example.food.models.Restaurant;

import java.util.List;

public interface RestaurantService {
    default Restaurant addRestaurant(Restaurant restaurant) {
        return null;
    }

    Restaurant addFoodItem(String restaurantName, FoodItem foodItem);

    List<Restaurant> getRestaurant();

    Order placeOrder(Order order);

    List<Order> getOrder();
}
