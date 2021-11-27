package com.example.food.service;


import com.example.food.models.FoodItem;
import com.example.food.models.FoodOrder;
import com.example.food.models.Orders;
import com.example.food.models.Restaurant;
import com.example.food.repository.OrderRepository;
import com.example.food.repository.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RestaurantServiceImpl implements RestaurantService{

    @Autowired
    private RestaurantRepository restaurantRepository;
    @Autowired
    private OrderRepository orderRepository;

    @Override
    public Restaurant addRestaurant(Restaurant restaurant) {
        return restaurantRepository.save(restaurant);
    }

    @Override
    public Restaurant addFoodItem(String restaurantName, FoodItem foodItem) {
        Restaurant resDB = restaurantRepository.findByRestaurantName(restaurantName);

        resDB.setFoodItems(foodItem);
        return restaurantRepository.save(resDB);
    }

    @Override
    public List<Restaurant> getRestaurant() {
        return restaurantRepository.findAll();
    }

    @Override
    public Orders placeOrder(Orders order) {
        return orderRepository.save(order);
    }

    @Override
    public List<Orders> getOrder() {
        return orderRepository.findAll();
    }


}
