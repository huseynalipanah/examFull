import React, { useContext } from "react";
import { BasketContext } from "../../Context/BasketContext/BasketContext";
import "./Basket.scss";
const Basket = () => {
  const { basket , increase , decrease , removeBasket} = useContext(BasketContext);
  return (
    <div className="basket-page">
        <Helmet>
        <title>Add Page</title>
      </Helmet>
      {basket &&
        basket.map((item) => (
          
            <div className="basket-card" key={item._id}>
              <div className="card-img">
                <img src={item.img} alt="" />
              </div>
              <div className="card-txt">
                <span className="card-header">WRIST BAND</span>
                <h1>
                  {item.name}
                </h1>
                <span className="card-price">₼ {item.price*item.count}</span>
                <div className="basket-btns">

                <div className="count">
                  <button onClick={() => decrease(item)}>-</button>
                  <span>{item.count}</span>
                  <button onClick={() => increase(item)}>+</button>
                </div>
                  <div className="remove-basket">
                    <button onClick={() => removeBasket(item)}><i className="fa-solid fa-trash"></i></button>
                  </div>
                </div>
              </div>
            </div>
   
        ))}
    </div>
  );
};

export default Basket;
