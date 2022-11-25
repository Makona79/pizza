import React from "react";
import "./scss/app.scss";
import Header from "./components/Header";
import Sort from "./components/Sort";
import Categories from "./components/Categories";
import Pizzablock from "./components/Pizzablock";
import { useState } from "react";
import { useEffect } from "react";
import Skeleton from "./components/Skeleton";
import { Routes, Route, Outlet, Link } from "react-router-dom";

// import pizzas from './assets/pizzas.json';

function App() {
  //  const pizzas= [
  // 	{
  // 	  "id": 0,
  // 	  "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",
  // 	  "title": "Пепперони Фреш с перцем",
  // 	  "types": [0, 1],
  // 	  "sizes": [26, 30, 40],
  // 	  "price": 803,
  // 	  "category": 0,
  // 	  "rating": 4
  // 	}, {
  // 		"id": 1,
  // 		"imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
  // 		"title": "Сырная",
  // 		"types": [0],
  // 		"sizes": [26, 40],
  // 		"price": 245,
  // 		"category": 1,
  // 		"rating": 6
  // 	 },
  // 	 {
  // 		"id": 2,
  // 		"imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/6652fec1-04df-49d8-8744-232f1032c44b.jpg",
  // 		"title": "Цыпленок барбекю",
  // 		"types": [0],
  // 		"sizes": [26, 40],
  // 		"price": 295,
  // 		"category": 1,
  // 		"rating": 4
  // 	 },
  // 	 {
  // 		"id": 3,
  // 		"imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/af553bf5-3887-4501-b88e-8f0f55229429.jpg",
  // 		"title": "Кисло-сладкий цыпленок",
  // 		"types": [1],
  // 		"sizes": [26, 30, 40],
  // 		"price": 275,
  // 		"category": 2,
  // 		"rating": 2
  // 	 },
  // 	 {
  // 		"id": 4,
  // 		"imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",
  // 		"title": "Чизбургер-пицца",
  // 		"types": [0, 1],
  // 		"sizes": [26, 30, 40],
  // 		"price": 415,
  // 		"category": 3,
  // 		"rating": 8
  // 	 },]

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://63306eb9591935f3c88fd5e5.mockapi.io/pizzas")
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
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
      </div>
    </div>
  );
}

export default App;
