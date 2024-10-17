import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Bottle from "./Bottle";

const WaterBottle = () => {
  const [bottles, setBottle] = useState([]);
  const [cart, setCart] = useState([]);

  const url =
    "https://raw.githubusercontent.com/ProgrammingHero1/memorable-water-bottle/refs/heads/main/public/bottles.json";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBottle(data));
  }, []);


  // === add to cart button main event handler ===
  const handleAddToCart = (bottle) => {
    addToCart(bottle?.id);
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    console.log(storedCart);
    setCart(storedCart);
  };

  function storedCart() {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      return storedCart;
    }
    return [];
  }

  function addToCart(id) {
    const cartJson = storedCart();
    const newCart = [...cartJson, id];
    localStorage.setItem("cart", JSON.stringify(newCart));
  }


  return (
    <div>
      <Navbar></Navbar>

      {/* water bottle main container starts */}
      <div className="max-w-[1200px] border-4 border-red-500 mx-auto">
        <div className="border-2 border-black w-fit p-2 md:p-5 lg:p-10">
          <h2 className="font-semibold text-lg">Cart item: {cart?.length} </h2>
          <h2 className="font-semibold text-lg">
            Total water bottle: {bottles?.length}{" "}
          </h2>
        </div>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          {bottles?.map((bottle, idx) => (
            <Bottle
              key={bottle?.id}
              bottle={bottle}
              handleAddToCart={handleAddToCart}
            ></Bottle>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WaterBottle;
