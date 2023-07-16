import "./Item.css";

const UserItem = ({ item }) => {
  const { image, title, description, price, category } = item;
  return (
    <li className="item">
      <img src={`http://localhost:4444${image}`} alt={title} width="120px" height="120px" />
      <p className="item_title">{title}</p>
      <p className="item_description">category: {category}</p>
      <p className="item_price">${price}</p>
      <p className="item_description">{description}</p>
    </li>
  );
};

export default UserItem;
