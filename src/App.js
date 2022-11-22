import React from "react";
import "./scss/app.scss";
import Header from "./components/Header";
import Sort from "./components/Sort";
import Categories from "./components/Categories";
import Pizzablock from "./components/Pizzablock";

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
						<Pizzablock title="Мексиканская" price="350" />
						<Pizzablock title="ПИицца-чизбургер" price="500" />
						<Pizzablock title="Пицца грибная" price="450" />
						<Pizzablock title="Мексиканская" price="350" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
