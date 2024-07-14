import axios from "axios";
import { useEffect, useState } from "react";
import SccoopOption from "./SccoopOption";

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);

  // optionType 'scoops' or 'toppings'
  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error(`Error fetching ${optionType}`, error);
      });
  }, [optionType]);

  const ItemComponent = optionType === "scoops" ? SccoopOption : null;

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return <div>{optionItems}</div>;
}
