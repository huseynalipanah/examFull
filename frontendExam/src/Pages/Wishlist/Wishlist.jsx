import React, { useContext } from "react";
import { WishlistContext } from "../../Context/WishlistContext/WishlistContext";
import "./Wishlist.scss"
import { Helmet } from "react-helmet-async";
const Wishlist = () => {
  const { wish, addWishlist, isWishlist } = useContext(WishlistContext);
  return (
    <div className="wish-page">
        <Helmet>
        <title>Add Page</title>
      </Helmet>
      {wish &&
        wish.map((item) => (
          <div className="wish-card" key={item._id}>
            <div className="card-img">
              <img src={item.img} alt="" />
            </div>
            <div className="card-txt">
              <span className="card-header">WRIST BAND</span>
              <h1>{item.name}</h1>
              <span className="card-price">₼ {item.price }</span>
              <div className="wish-btns">
               
                <div className="remove-wish">
                  <button
                    onClick={() => addWishlist(item)}
                    style={
                      isWishlist(item) ? { color: "red" } : { color: "white" }
                    }
                  >
                    ❤
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Wishlist;
