function Drawer({ closeCart, cartItems, onRemoveItem }) {

    return (
        <div className="overlay">
            <div className="drawer">
                <div className="drawerTop">
                    <h2 className="mb-30">Корзина</h2>
                    <img onClick={closeCart} width={31} height={31} src="/img/close.svg" alt="close" />
                </div>

                {
                    (cartItems.length > 0) ? (<div className="items">
                        {
                            cartItems.map((obj, index) => (
                                <div key={index} className="cartItem d-flex align-center mb-20">
                                    <div style={{ backgroundImage: `url(${obj.imageUrl})` }} className="cartItemImg"></div>

                                    <div className="mr-20 flex">
                                        <p className="mb-5">{obj.title}</p>
                                        <b>{obj.price} руб.</b>
                                    </div>
                                    <img onClick={() => onRemoveItem(obj.id)} className="removeBtn" src="/img/btn-remove.svg" alt="remove" />
                                </div>
                            ))
                        }
                    </div>) : (<div className="emptyCart">
                        <img src="/img/emptyCart.png" alt="emptyCart" />
                        <h2>Корзина пустая</h2>
                        <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                    </div>)
                }

                <div className="cartTotalBlock">
                    <ul>
                        <li>
                            <span>Итого: </span>
                            <div></div>
                            <b>21 498 руб.</b>
                        </li>
                        <li>
                            <span>Налог 5%:</span>
                            <div></div>
                            <b>1 074 руб.</b>
                        </li>
                    </ul>
                    <button>Оформить заказ</button>
                </div>


            </div>
        </div >
    );
}

export default Drawer;