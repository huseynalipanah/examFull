import React, { createContext } from "react";
import useLocalStorage from "use-local-storage";
export const WishlistContext = createContext();
const WishlistProvider = ({ children }) => {
  const [wish, setWish] = useLocalStorage("Wishlist", []);

  function addWishlist(item) {
    const index = wish.findIndex((x) => x._id === item._id);
    if (index === -1) {
      return setWish([...wish, item]);
    }
    setWish(wish.filter((x) => x._id !== item._id));
  }
  function isWishlist(item) {
    return wish.findIndex((x) => x._id === item._id) === -1 ? false : true;
  }
  return (
    <WishlistContext.Provider value={{ wish, addWishlist, isWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;
