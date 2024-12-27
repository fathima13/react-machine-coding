import { useEffect, useState } from "react";
import "./carouselWithTimer.css";

export default function App() {
  const [img, setImg] = useState(0);

  const [count, setCount] = useState(1);
  const arr = [
    "https://images.unsplash.com/photo-1621570169561-0c2a2e193ee1?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1621687366391-dda85ef1edb1?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  ];

  useEffect(() => {
    const a = setTimeout(() => {
      setImg((img) => (img === arr.length - 1 ? 0 : img + 1));
    }, 2000);

    return () => {
      clearTimeout(a);
    };
  }, [img]);

  return (
    <div className="app-body">
      <img style={{ width: "50%", height: "50%" }} src={arr[img]} alt="img" />

      <div>
        <button
          className="mr-10"
          onClick={() =>
            setImg((img) => (img === 0 ? arr.length - 1 : img - 1))
          }
        >
          Prev
        </button>

        <button
          onClick={() =>
            setImg((img) => (img === arr.length - 1 ? 0 : img + 1))
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}
