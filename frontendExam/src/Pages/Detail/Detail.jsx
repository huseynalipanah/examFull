import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { WishlistContext } from "../../Context/WishlistContext/WishlistContext";
import { BasketContext } from "../../Context/BasketContext/BasketContext";
import "./Detail.scss"
const Detail = () => {
  const [detail, setDetail] = useState([]);
  const { addBasket } = useContext(BasketContext);
  const { addWishlist, isWishlist } = useContext(WishlistContext);
  const {id} = useParams()
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3000/card/${id}`);
      const newData = await response.json();
      setDetail(newData);
    };
    fetchData();
  }, []);
  return (
    <div className="detail-cards">
     
        <div className="detail-card" key={detail._id}>
          <div className="card-img">
            <img src={detail.img} alt="" />
          </div>
          <div className="card-txt">
            <span className="card-header">WRIST BAND</span>
            <h1>{detail.name}</h1>
            <span className="card-price">₼ {detail.price}</span>
            <div className="buttons">
              <button onClick={() => addBasket(detail)}>
                <i className="fa-solid fa-cart-shopping"></i>
              </button>
              <button
                onClick={() => addWishlist(detail)}
                style={isWishlist(detail) ? { color: "red" } : { color: "white" }}
              >
                ❤
              </button>
            </div>
          </div>
        </div>

    </div>
  );
};

export default Detail;
