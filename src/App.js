import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://63dbfd55c45e08a04352c66d.mockapi.io/items')
      .then(res => res.json())
      .then(json => setItems(json))
  }, [])

  const addToCart = (obj) => {
    if (!cartItems.includes(obj)) {
      setCartItems((prev) => [...prev, obj])
    } else {
      deleteFromCart(obj);
    }
  }

  const deleteFromCart = (obj) => {
    setCartItems(cartItems.filter(item => item.title !== obj.title));
  }

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer deleteFromCart={deleteFromCart} cartItems={cartItems} closeCart={() => setCartOpened(false)} />}

      <Header openCart={() => setCartOpened(true)} />

      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>{searchValue ? `Поиск по запросу: ${searchValue}` : 'Все кроссовки'}</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input value={searchValue} onChange={onChangeSearchValue} placeholder="Поиск..." />
            {searchValue && <img onClick={() => setSearchValue('')} className="removeInput" src="/img/btn-remove.svg" alt="close"/>}
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {
            items.map((obj, index) => {
              return <Card
                obj={obj}
                key={index}
                title={obj.title}
                price={obj.price}
                imageUrl={obj.imageUrl}
                addToCart={addToCart} />
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
