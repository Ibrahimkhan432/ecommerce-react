import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Badge, Button, Image } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
export default function Header() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const isLogin = true;
  return (
    <header className="shadow body-font px-10">
      <div>
        <div className="grid xl:grid-cols-1 grid-cols-1">
          <div className="p-4">
            <div className="py-3 px-3 rounded-xl border w-full bg-blue-900">
              <div className="flex justify-between items-center">
                <div className="flex justify-items-center items-center gap-2">
                  <p className=" font-semibold text-white text-4xl">1-Online</p>
                  <div style={{ position: "relative" }}>
                    <input
                      className="rounded-3xl py-3 px-3 outline-none text-xs w-[350px] pr-10 hidden lg:block md:block"
                      placeholder="Search for Grocery, Stores, Vegetable, or Meat"
                      />
                 <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth="1.5"
  stroke="currentColor"
  className="w-5 h-5 text-green-900 absolute right-3 top-1/2 transform -translate-y-1/2 hidden lg:block md:block cursor-pointer"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
  />
</svg>

                  </div>
                     
                </div>
                <div className="w-[300px] flex text-2xl gap-8">
                  <Link
                    to={"/products"}
                    className=" text-white duration-500 hover:scale-125"
                  >
                    Products
                  </Link>
                  <Link
                    to={"/orders"}
                    className="text-white duration-500 hover:scale-125"
                  >
                    Orders
                  </Link>
                </div>
                <div className="flex gap-7 ">
                  {isLogin ? (
                    <Avatar size={50} icon={<UserOutlined />} />
                  ) : (
                    <Button onClick={() => navigate("/auth")}>Login</Button>
                  )}
                  <div className="flex justify-items-center items-center gap-7 ">
                    <Link to={"/"}>
                      <Image
                        height={50}
                        width={50}
                        className="rounded-full"
                        preview={false}
                        src="https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D://images.unsplash.com/photo-1664688708942-c77a6b5e6abc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWNvbW1lcmNlJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D"
                      />
                    </Link>
                    <Link to={"/cart"}>
                      <Badge count={cartItems.length}>
                        <ShoppingCartOutlined
                          style={{
                            fontSize: 40,
                            color: "white",
                          }}
                        />
                      </Badge>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
