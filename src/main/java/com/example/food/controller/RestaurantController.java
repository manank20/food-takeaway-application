package com.example.food.controller;

import com.example.food.models.FoodItem;
import com.example.food.models.Restaurant;
import com.example.food.service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class RestaurantController {

    @Autowired
    private RestaurantService restaurantService;

//    TestAPI
//    @GetMapping(path="/")
//    public String hello(){
//        return "hello";
//    }

    @PostMapping("/addRestaurant")
    public Restaurant addRestaurant(@RequestBody Restaurant restaurant){
        return restaurantService.addRestaurant(restaurant);
    }

    @PutMapping("addFoodItem/{name}")
    public Restaurant addFoodItem(@PathVariable("name") String restaurantName,
                                  @RequestBody FoodItem foodItem){
        return restaurantService.addFoodItem(restaurantName,foodItem);
    }

    @GetMapping("/restaurant")
    public List<Restaurant> getRestaurant(){
        return restaurantService.getRestaurant();
    }

}
