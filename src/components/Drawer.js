function Drawer({closeCart}) {

    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="mb-30">Корзина</h2>

                <div className="items">
                    <div className="cartItem d-flex align-center mb-20">
                        <div style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }} className="cartItemImg"></div>

                        <div className="mr-20 flex">
                            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img onClick={closeCart} className="removeBtn" src="/img/btn-remove.svg" alt="remove" />
                    </div>
                </div>

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