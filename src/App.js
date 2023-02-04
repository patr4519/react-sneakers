import React from "react";
import axios from "axios";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios.get('https://63dbfd55c45e08a04352c66d.mockapi.io/items').then((res) => {
      setItems(res.data);
    });
    axios.get('https://63dbfd55c45e08a04352c66d.mockapi.io/cart').then((res) => {
      setCartItems(res.data);
    })
  }, [])
  
  const addToCart = (obj) => {
    axios.post('https://63dbfd55c45e08a04352c66d.mockapi.io/cart', obj)
    setCartItems((prev) => [...prev, obj]);
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://63dbfd55c45e08a04352c66d.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  }

  const onAddToFavorites = (obj) => {
    axios.post('https://63de9e9ff1af41051b16642d.mockapi.io/favorites', obj)
    setFavorites((prev) => [...prev, obj]);
  }

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer onRemoveItem={onRemoveItem} cartItems={cartItems} closeCart={() => setCartOpened(false)} />}

      <Header openCart={() => setCartOpened(true)} />

      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>{searchValue ? `Поиск по запросу: ${searchValue}` : 'Все кроссовки'}</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input value={searchValue} onChange={onChangeSearchValue} placeholder="Поиск..." />
            {searchValue && <img onClick={() => setSearchValue('')} className="removeInput" src="/img/btn-remove.svg" alt="close" />}
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {
            items
              .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
              .map((obj, index) => {
                return <Card
                  obj={obj}
                  key={index}
                  title={obj.title}
                  price={obj.price}
                  imageUrl={obj.imageUrl}
                  addToCart={addToCart}
                  onAddToFavorites={() => onAddToFavorites(obj)} />
              })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
