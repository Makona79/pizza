import React from "react";
import { useState } from "react";

const Categories = ({ value, onClickCategory }) => {
  //   const [activeIndex, setActiveIndex] = useState(0);
  //   const onClickCategory = (index) => {
  //     setActiveIndex(index);
  //   };
  const categories = [
    "все",
    "Мясная",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li
            onClick={() => onClickCategory(i)}
            className={value === i ? "active" : ""}
            key={i}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Categories;
