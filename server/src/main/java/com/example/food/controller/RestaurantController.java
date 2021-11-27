package com.example.food.controller;

import com.example.food.models.*;
import com.example.food.service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;


@RestController

@RequestMapping("/api/user")

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

    @PutMapping("/addFoodItem/{name}")
    public Restaurant addFoodItem(@PathVariable("name") String restaurantName,
                                  @RequestBody FoodItem foodItem){
        return restaurantService.addFoodItem(restaurantName,foodItem);
    }

    @GetMapping("/restaurant")
    public List<Restaurant> getRestaurant(){
        return restaurantService.getRestaurant();
    }

    @PostMapping("/placeOrder")
    public ResponseEntity<Orders> saveUser(@RequestBody Orders order){
        //System.out.println("Result {}"+order.getUsername());
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/user/placeOrder").toUriString());
        return ResponseEntity.created(uri).body(restaurantService.placeOrder(order));
    }

    @GetMapping("/getOrder")
    public List<Orders> getOrder(){
        return restaurantService.getOrder();
    }

}
