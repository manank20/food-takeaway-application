import React from "react";
import {Link} from "react-router-dom";

function Restaurant(props){
    return(
        
        <Link to={`/${props.name}/order`} style={{textDecoration:'none'}}>
        <div className="restaurant-container">
            <img  src={`/images/restaurant/${props.name}.jpg`} className="restaurant-image" alt="" />
            <div className="restaurant-container-title">
                {props.name}
            </div>
            <div className="restaurant-container-rating">
                rating
            </div>
        </div>
        </Link>
        
        
    )
}

export default Restaurant;