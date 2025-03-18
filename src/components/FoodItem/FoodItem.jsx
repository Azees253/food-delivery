import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image}></img>
        {!cartItems[id] ? (
          <div className="add">
            <i onClick={() => addToCart(id)} className={assets.add_icon} />
          </div>
        ) : (
          <div className="food-item-counter">
            <i
              onClick={() => removeFromCart(id)}
              className={assets.dec_icon}
              style={{
                backgroundColor: "pink",
                paddingLeft: "5px",
                paddingRight: "5px",
                paddingTop: "6px",
                paddingBottom: "4px",
                borderRadius: "50%",
              }}
            ></i>
            <p>{cartItems[id]}</p>
            <i
              onClick={() => addToCart(id)}
              className={assets.add_icon}
              style={{
                backgroundColor: "lightgreen",
                paddingLeft: "5px",
                paddingRight: "5px",
                paddingTop: "6px",
                paddingBottom: "4px",
                borderRadius: "50%",
              }}
            ></i>
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <div className="rating">
            <i class="fa-solid fa-star" style={{ color: "orange" }}></i>
            <i class="fa-solid fa-star" style={{ color: "orange" }}></i>
            <i class="fa-solid fa-star" style={{ color: "orange" }}></i>
            <i class="fa-solid fa-star" style={{ color: "orange" }}></i>
            <i
              class="fa-solid fa-star-half-stroke"
              style={{ color: "orange" }}
            ></i>
          </div>
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
