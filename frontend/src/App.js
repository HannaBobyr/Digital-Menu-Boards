import "./App.css";
import { useEffect, useState } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

import BusinessData from "./components/BusinessData";
import ItemList from "./components/ItemsList";

function App() {
  const [items, setItems] = useState([]);
  const [businessData, setBusinessData] = useState({});

  const handle = useFullScreenHandle();

  useEffect(() => {
    const fetchData = async () => {
      let json;
      if (localStorage.getItem("data")) {
        json = JSON.parse(localStorage.getItem("data"));
      } else {
        const data = await fetch("./items.json");
        json = await data.json();
        localStorage.setItem("data", JSON.stringify(json));
      }
      const { businessData, items } = json;
      setItems(items);
      setBusinessData(businessData);
    };
    fetchData();
  }, []);

  if (!items) return <p>loarding</p>;

  return (
    <div className="fullscreen">
      <FullScreen handle={handle}>
        <BusinessData data={businessData} />
        <ItemList items={items} />
      </FullScreen>

      {/* <button onClick={handle.enter}>Enter fullscreen</button> */}
    </div>
  );
}

export default App;
