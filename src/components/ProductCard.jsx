import React, { useContext } from "react";
import { Button, Card, Col, Image } from "antd";
import { Link } from "react-router-dom";
// import { data } from "autoprefixer";
import { CartContext } from "../context/CartContext";
const ProductCard = ({ item, onClick }) => {
  const { addItemToCart, isItemAdded } = useContext(CartContext);
  // console.log("cart items", cartItems);
  return (
    <div className="p-10">
    <Col sm={24} md={12} lg={8} xl={6}>
      <div className="w-60 bg-blue-100 shadow-lg rounded-lg duration-500 hover:scale-125 hover:shadow-xl border-4 border-blue-200">
        <Link
    to={`/product/${item.id}`}
    className="lg:w-1/4 md:w-1/2 p-4 w-full shadow"
  >
        <div className="bg-white">
          <Image
            preview={false}
            src={item.thumbnail}
            height={200}
            className="h-48 w-72 object-cover rounded-t-xl"
          />
        </div>
        <div className="px-4 py-3">
          <p className="text-lg font-bold text-black truncate capitalize">
            {item.title}
          </p>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3">
              $ {item.price}
            </p>
          </div>
        </div>
        </Link>
        <div className="flex gap-3 my-2">
          <Button type="" className="bg-blue-500 text-white">
            Buy Now
          </Button>
          <Button
            type="primary"
            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-3 py-2.5 text-center me-2 mb-2"
            onClick={() => addItemToCart(item)}
          >
            {isItemAdded(item)
              ? `added (${isItemAdded(item.id).quantity})`
              : `add to cart`}{" "}
            <div className="ml-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="currentColor"
                className="bi bi-bag-plus"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                />
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>
            </div>
          </Button>
        </div>
      </div>
    </Col>
  </div>
 
  
  );
};
export default ProductCard;
