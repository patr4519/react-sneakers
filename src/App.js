import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

arr = [
  {name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999},
  {name: 'Мужские Кроссовки Nike Air Max 270', price: 15999}
]

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">

        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовоки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex">
          
        </div>

      </div>
    </div>
  );
}

export default App;
