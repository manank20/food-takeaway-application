package com.example.food.models;

import org.springframework.stereotype.Component;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Component
@Entity
public class FoodItem {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long foodItemId;
    private String foodItemName;
    private String foodItemCategory;
    private int foodItemPrice;
    private boolean foodItemVegetarian;

    public long getFoodItemId() {
        return foodItemId;
    }

    public void setFoodItemId(long foodItemId) {
        this.foodItemId = foodItemId;
    }

    public String getFoodItemName() {
        return foodItemName;
    }

    public void setFoodItemName(String foodItemName) {
        this.foodItemName = foodItemName;
    }

    public String getFoodItemCategory() {
        return foodItemCategory;
    }

    public void setFoodItemCategory(String foodItemCategory) {
        this.foodItemCategory = foodItemCategory;
    }

    public int getFoodItemPrice() {
        return foodItemPrice;
    }

    public void setFoodItemPrice(int foodItemPrice) {
        this.foodItemPrice = foodItemPrice;
    }

    public boolean isFoodItemVegetarian() {
        return foodItemVegetarian;
    }

    public void setFoodItemVegetarian(boolean foodItemVegetarian) {
        this.foodItemVegetarian = foodItemVegetarian;
    }

    public FoodItem(long foodItemId, String foodItemName, String foodItemCategory, int foodItemPrice, boolean foodItemVegetarian) {
        this.foodItemId = foodItemId;
        this.foodItemName = foodItemName;
        this.foodItemCategory = foodItemCategory;
        this.foodItemPrice = foodItemPrice;
        this.foodItemVegetarian = foodItemVegetarian;
    }

    public FoodItem() {

    }

    @Override
    public String toString() {
        return "foodItem{" +
                "foodItemId=" + foodItemId +
                ", foodItemName='" + foodItemName + '\'' +
                ", foodItemCategory='" + foodItemCategory + '\'' +
                ", foodItemprice=" + foodItemPrice +
                ", foodItemVegetarian=" + foodItemVegetarian +
                '}';
    }
}
