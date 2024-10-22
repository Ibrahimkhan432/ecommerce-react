import { Button, Row } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=12")
      .then((res) => setProducts(res.data.products));
  }, []);

  return (
    <div className="container mx-auto px-10 ">
      <div className="flex justify-center my-10">
        <Link to={"/products"}>
          <Button className="border-blue-800 text-blue-900">See All</Button>
        </Link>
      </div>

      <Row gutter={16} justify={'center'}>
        {products.map((data) => (
          <ProductCard key={data.id} item={data} />
        ))}
      </Row>
    </div>
  );
}

export default Home;