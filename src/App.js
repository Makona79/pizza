import React from "react";
import "./scss/app.scss";
import Header from "./components/Header";
import Sort from "./components/Sort";
import Categories from "./components/Categories";
import Pizzablock from "./components/Pizzablock";
import pizzas from './assets/pizzas.json';
console.log(pizzas);
function App() {
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
						{pizzas.map((obj) => (
						<Pizzablock title={obj.title} price={350} />
						))	}				
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
