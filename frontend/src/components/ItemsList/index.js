import Item from "../Item";
import './index.css'

const ItemList = ({ items }) => {
  return (
    <ul className="items-list">
      {items.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </ul>
  );
};
export default ItemList;
