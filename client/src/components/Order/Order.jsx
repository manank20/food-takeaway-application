import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar";
import RestaurantOrder from "./RestaurantOrder";
import AccountIcon from "../AccountIcon";
import Cart from "../Checkout/Cart"
import Footer from "../Footer/Footer"
function Order(props) {
    var { name } = useParams();
    const [restaurant, setRestaurant] = useState({
        id: "",
        name: "",
        items: []
    });
    const [shoppingCart, setShoppingCart] = useState([]);
    const [load, setLoad] = useState(false);
    const [total, setTotal] = useState(0);
    const [count, setCount] = useState(0);
    const [cartDisplay, setCartDisplay] = useState(false);
    function displayCart() {
        if (cartDisplay) {
            setCartDisplay(false)
        }
        else {
            setCartDisplay(true)
        }
    }
    function addToCart(item) {

        const find = shoppingCart.findIndex(element => element.id === item.id)
        const newShoppingCart = shoppingCart;
        if (find !== -1) {
            newShoppingCart[find].quantity += 1;
            setLoad(true)
            if (load) {
                setShoppingCart(newShoppingCart)
                setLoad(false)
            }
            setCount(count + 1)
        }
        else {
            setShoppingCart([...shoppingCart, item])
            setCount(count + 1)
        }
    }
    function removeFromCart(id) {
        const find = shoppingCart.findIndex(element => element.id === id)
        const newShoppingCart = shoppingCart;
        if (find !== -1) {
            newShoppingCart[find].quantity -= 1;
            if (newShoppingCart[find].quantity === 0) {
                const remove = newShoppingCart.filter(element => element.id !== id)
                setShoppingCart(remove);
            } else {
                setLoad(true)
                if (load) {
                    setShoppingCart(newShoppingCart)
                    setLoad(false)
                }
            }
            setCount(count + 1)
        }
    }
    useEffect(() => {
        var totalPrice = 0;
        shoppingCart.forEach(element => {
            totalPrice += (element.price * element.quantity)
        });
        setTotal(totalPrice);
    }, [count, shoppingCart])
    useEffect(() => {
        let mounted = true;
        axios.get(`http://localhost:8080/api/user/restaurant`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
            .then(function (response) {
                
                var res = [...response.data];
                let eatery = res.find(element => element.restaurantName===name);
                if (mounted) {
                    console.log(eatery);
                    setRestaurant({
                        id: eatery.restaurantId,
                        name: eatery.restaurantName,
                        items: [...eatery.foodItems]
                    });
                }
            }).catch(function (error) {
                console.log(error);
            })
        return () => mounted = false;
    }, [name])
    return (
        <div key={restaurant.id}>
            <div style={{ 'display': cartDisplay ? 'none' : 'block' }} >
                <Navbar searchDisplay={false} authenticated={props.authenticated} applyAccessToken={props.applyAccessToken}/>
                <AccountIcon authenticated={props.authenticated} applyAccessToken={props.applyAccessToken}/>
                <RestaurantOrder
                    id={restaurant.id}
                    name={restaurant.name}
                    foodItems={restaurant.items}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}

                />
            </div>
            <Cart shoppingCart={shoppingCart}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                restaurantName={restaurant.name}
                restaurantId={restaurant.id}
                restaurantType={restaurant.type}
                total={total}
                displayCart={displayCart}
                cartDisplay={cartDisplay}
            />
            <Footer />
        </div>
    );
}

export default Order;