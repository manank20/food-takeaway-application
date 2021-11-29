import React, { useState, useEffect } from "react";
import axios from "axios";
import Restaurant from "./Restaurant";


function RestaurantList(props) {
    const [restaurants, setRestaurants] = useState([]);
    useEffect(() => {
        
            let mounted = true;
            axios.get(`http://localhost:8080/api/user/restaurant`,{
                headers : {
                    Authorization:localStorage.getItem('token')
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
      
    }, [props.accessToken]);

    const filtered = props.search.length === 0 ? restaurants : 
    restaurants.filter(restaurant => restaurant.restaurantName.toLowerCase().includes(props.search.toLowerCase()))
    return (

        <div className="restaurant-list" >
            {filtered.map(restaurant => <Restaurant
                key={restaurant.restaurantId}
                id={restaurant.restaurantId}
                name={restaurant.restaurantName}
                items={restaurant.foodItems} />
            )}
        </div>)
}

export default RestaurantList;