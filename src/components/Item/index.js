import "./index.css";

const Item = ({ item }) => {
  const { image, title, description, price } = item;
  return (
    <li className="item">
      <img
        src={image}
        alt={title}
        width="120px"
        height="120px"
      />
      <p className="item_title">{title}</p>
      <p className="item_price">{price}</p>
      <p className="item_description">{description}</p>
    </li>
  );
};

export default Item;
