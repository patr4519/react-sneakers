import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

// https://63dbfd55c45e08a04352c66d.mockapi.io/items

function App() {
  const [items, setItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://63dbfd55c45e08a04352c66d.mockapi.io/items')
      .then(res => res.json())
      .then(json => setItems(json))
  }, [])

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer closeCart={() => setCartOpened(false)} />}

      <Header openCart={() => setCartOpened(true)} />

      <div className="content p-40">

        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {
            items.map((obj, index) => {
              return <Card
                key={index}
                title={obj.title}
                price={obj.price}
                imageUrl={obj.imageUrl} />
            })
          }
        </div>

      </div>
    </div>
  );
}

export default App;
