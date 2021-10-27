package com.example.food.repository;

import com.example.food.models.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Map;

@Repository
public interface RestaurantRepository extends JpaRepository<Restaurant, Long> {

    public Restaurant findByRestaurantName(String restaurantName);
}
