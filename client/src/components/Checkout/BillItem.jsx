import React from "react";

function BillItem(props) {
    return (
        <div className="order-food">
            <div className="order-food-item">
                <img className="order-food-item-image" src={`/images/dishes/${props.name}.jpg`} alt="" />
                <img src="/images/veg.png" alt="" className="order-food-item-veg" style={{ filter: `${props.veg ? "none" : "hue-rotate(247deg)"}` }} />
                <div className="order-food-item-detail">
                    <p className="order-food-item-name">
                    {props.name}
                    </p>
                    <p className="order-food-item-price">
                        <span>&#8377;</span> {props.price}
                    </p>
                </div>

            </div>
            <div className="cart-buttons">
                {props.quantity === 0 ? <button className="add-to-cart-empty" onClick={() => {
                    props.addToCart({
                        id: props.id,
                        name: props.name,
                        price: props.price,
                        veg: props.veg,
                        quantity: 1
                    })
                }}>
                    Add +
                </button> :
                    <div className="add-to-cart">
                        <button className="add-to-cart-item" onClick={() => {
                            props.removeFromCart(props.id)

                        }}>
                            -
                        </button>
                        <div className="add-to-cart-item">
                            {props.quantity}
                        </div>
                        <button className="add-to-cart-item" onClick={() => {
                            props.addToCart({
                                id: props.id,
                                name: props.name,
                                price: props.price,
                                veg: props.veg,
                                quantity: 1
                            })

                        }}>
                            +
                        </button>
                    </div>}
                
            </div>
        </div>
    )
}

export default BillItem;