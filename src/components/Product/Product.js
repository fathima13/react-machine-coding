import React, { useEffect, useState } from "react";
import "./Product.css";

export default function Product() {
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  const [order, setOrder] = useState("increasing");

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data)
      setProductList(data);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  const onChangeHandler = (value) => {
    setOrder(value)
    sortElement(value)
  }

  const sortElement = () => {
    const updatedOrder = [...productList]
    if(order === "increasing"){
        updatedOrder.sort((a,b) => a.price - b.price );
    }
    else{
        updatedOrder.sort((a,b) => b.price - a.price );
    }
    setProductList([...updatedOrder])
  }

  return (
    <div>
      <h1>Product Details</h1>
      <div className="products">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
            <div>
                <select value={order} onChange={(event) => onChangeHandler(event.target.value)}>
                    {
                    ["increasing", "decreasing"].map((ele) => (
                        <option value={ele} key={ele}>{ele}</option>
                    ))
                    }
                        
                </select>
                {
                    productList?.map((product) => (
                    <div className="product-card" key={product.id}>
                        <h2>{product.title}</h2>
                        <h5>{product.category}</h5>
                        <p>{product.description}</p>
                        <img
                        src={product.image}
                        alt={product.title}
                        width={100}
                        height={100}
                        />
                    </div>
                    ))
                }
            </div>
         
        )}
      </div>
    </div>
  );
}
