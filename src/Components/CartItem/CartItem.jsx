import React, { useContext, useState } from "react";
import "./CartItem.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
const CartItem = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);
  let [name, setName] = useState("");
  return (
    <div className="cartitems">
      <div className="cartitems-formate-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((ex) => {
        if (cartItems[ex.id] > 0) {
          return (
            <div>
              <div className="cartitems-formate cartitems-formate-main">
                <img src={ex.image} alt="" className="carticon-product-icon" />
                <p>{ex.name}</p>
                <p>${ex.new_price}</p>
                <button className="cartitems-quantity">
                  {cartItems[ex.id]}
                </button>
                <p>${ex.new_price * cartItems[ex.id]}</p>
                <img
                  className="carticon-remove-icon"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(ex.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-items">
              <p>Subtotal</p>
              <p>${0}</p>
            </div>
            <hr />
            <div className="cartitems-total-items">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-items">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have Promo Code, Apply Here!</p>
          <div className="cartitems-promobox">
            <input
              type="text"
              placeholder="Promo Code"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <button
              onClick={() => {
                setName("");
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
