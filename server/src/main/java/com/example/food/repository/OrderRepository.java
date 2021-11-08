package com.example.food.repository;

import com.example.food.models.FoodOrder;
import com.example.food.models.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {

}