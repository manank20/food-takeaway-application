import React, { useState, useEffect } from "react";
import axios from "axios";
import Restaurant from "./Restaurant";


function RestaurantList(props) {
    const [restaurants, setRestaurants] = useState([]);
    useEffect(() => {
        
            let mounted = true;
            axios.get(`http://localhost:8080/api/user/restaurant`,{
                headers : {
                    Authorization:props.accessToken
                }
            })
                .then(function (response) {
                    if (mounted) {
                        const updateRestaurants = [...response.data];
                        setRestaurants(updateRestaurants);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
            return () => mounted = false;
      
    }, []);
    return (

        <div className="restaurant-list" >
            {restaurants.map(restaurant => <Restaurant
                key={restaurant.restaurantId}
                id={restaurant.restaurantId}
                name={restaurant.restaurantName}
                items={restaurant.foodItems} />
            )}
        </div>)
}

export default RestaurantList;