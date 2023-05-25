import "./App.css";
import { useEffect, useState } from "react";
import BusinessData from "./components/BusinessData";
import ItemList from "./components/ItemsList";

function App() {
  const [items, setItems] = useState([]);
  const [businessData, setBusinessData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("./items.json");
      const json = await data.json();
      const { businessData, items } = json;
      setItems(items);
      setBusinessData(businessData);
    };
    fetchData();
  }, []);

  if (!items) return <p>loarding</p>;

  return (
    <>
      <BusinessData data={businessData} />
      <ItemList items={items} />
    </>
  );
}

export default App;
