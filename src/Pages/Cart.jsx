import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Button, Image } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
function Cart() {
  const { cartItems, removeItemFromCart, addItemToCart, lessQuanityFromCart } =
    useContext(CartContext);

  const totalAmount = cartItems.reduce(
    (total, obj) => total + obj.quantity * obj.price,
    0
  );
  const totalQuantity = cartItems.reduce(
    (total, obj) => total + obj.quantity,
    0
  );

  
  return (
    <div className="container mx-auto my-5 w-[1000px] ">
      <h1 className="font-bold text-3xl text-center text">Shopping Cart</h1>
      <div className="flex gap-5 my-5">
        <div className="flex-grow flex flex-col border-4 rounded-lg border-blue-800 p-4 justify-center items-center">
          <h1>Total Quantity</h1>
          <h1 className="font-semibold font-mono mt-3 text-3xl">
            {totalQuantity}
          </h1>
        </div>
        <div className="flex-grow flex flex-col  p-4 justify-center items-center border-4 rounded-lg border-blue-800" >
          <h1>Total Amount</h1>
          <h1 className="font-semibold font-mono mt-3 text-3xl">
            ${Math.round(totalAmount)}
          </h1>
        </div>
        <div className="flex-grow flex flex-col  p-4 justify-center items-cente border-4 rounded-lg border-red-700 bg-red-500 text-white text-3xl font-mono">
        <Link to="/checkout" className="btn btn-primary"> Checkout </Link>
        </div>
      </div>
      {cartItems.map((data) => (
        <div key={data.id} className="flex items-center border my-2 p-3">
          <Image src={data.thumbnail} height={200} width={250} />
          <div className="flex flex-col pl-5">
            <h1 className="font-medium text-xl mb-2">
              {data.title} {`(${data.category})`}
            </h1>
            <h1 className="font-normal text-lg mb-2">{data.description}</h1>
            <h1 className="font-normal text-lg mb-2">Price : {data.price}</h1>

            <div className="flex gap-3 items-center">
              <Button
                onClick={() => addItemToCart(data)}
                icon={<PlusOutlined />}
              ></Button>

              <h1 className="text-xl">{data.quantity}</h1>
              <Button
                danger
                icon={<MinusOutlined />}
                onClick={() => lessQuanityFromCart(data.id)}
                disabled={data.quantity === 1}
              ></Button>
            </div>

            <Button
              onClick={() => removeItemFromCart(data.id)}
              danger
              className="w-40 my-4"
            >
              Remove item{" "}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;