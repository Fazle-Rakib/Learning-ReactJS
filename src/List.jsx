import PropTypes from "prop-types";

function List({items: fruits = [], category}) {
  // const fruits = [
  //   { name: "Apple", calories: 95 },
  //   { name: "Banana", calories: 105 },
  //   { name: "Armord", calories: 115 },
  //   { name: "Cherry", calories: 35 },
  //   { name: "Dragon", calories: 65 },
  // ];

  // fruits.sort((a,b) => a.name.localeCompare(b.name));
  // fruits.sort((a,b) => b.name.localeCompare(a.name));
  // fruits.sort((a,b) => b.calories - (a.calories));
  // fruits.sort((a,b) => a.calories - (b.calories));

  // const { items: fruits = [], category = "List" } = props;

  // const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);

  const listItems = fruits.map((fruit) => (
    <li key={fruit.name}>
      {fruit.name}: &nbsp;
      {fruit.calories}
    </li>
  ));

  // const listItems = lowCalFruits.map((fruit) => (
  //   <li key={fruit.name}>
  //     {fruit.name}: &nbsp;
  //     {fruit.calories}
  //   </li>
  // ));


  return (
    <>
      <h3 className="list-category">Category: {category}</h3>
      <ol className="list-item">{listItems}</ol>
    </>
  );
}

List.propTypes = {
  category : PropTypes.string,
}

export default List;
