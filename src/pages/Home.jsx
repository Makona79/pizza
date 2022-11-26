import React from "react";
import Sort from "../components/Sort";
import Categories from "../components/Categories";
import Pizzablock from "../components/Pizzablock";
import Skeleton from "../components/Skeleton";
const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    fetch("https://63306eb9591935f3c88fd5e5.mockapi.io/pizzas")
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(4)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <Pizzablock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};

export default Home;
