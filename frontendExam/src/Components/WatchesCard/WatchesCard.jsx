import React, { useContext, useEffect, useState } from "react";
import "./WatchesCard.scss";
import { BasketContext } from "../../Context/BasketContext/BasketContext";
import { WishlistContext } from "../../Context/WishlistContext/WishlistContext";
import { NavLink } from "react-router-dom";
const WatchesCard = () => {
  const [data, setData] = useState([]);
  const { addBasket } = useContext(BasketContext);
  const { addWishlist, isWishlist } = useContext(WishlistContext);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/card/");
      const newData = await response.json();
      setData(newData);
    };
    fetchData();
  }, []);
  return (
    <div className="watch-cards">
      {data.map((x) => (
        <div className="watch-card" key={x._id}>
          <div className="card-img">
            <img src={x.img} alt="" />
          </div>
          <div className="card-txt">
            <span className="card-header">WRIST BAND</span>
            <h1>{x.name}</h1>
            <span className="card-price">₼ {x.price}</span>
            <div className="buttons">

            <button onClick={() => addBasket(x)}>
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
            <button
              onClick={() => addWishlist(x)}
              style={isWishlist(x) ? { color: "red" } : { color: "white" }}
            >
              ❤
            </button>
            <NavLink to={"/detail/" + x._id}><i class="fa-regular fa-eye"></i></NavLink>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WatchesCard;
