const FoodItems = () => {
  let itemList = ["first", "second", "third", "fourth", "fifth"];
  return (
    <ul className="list-group">
      {itemList.map((item) => (
        <li key={item} className="list-group-item">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default FoodItems;
