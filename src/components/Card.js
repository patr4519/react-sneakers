function Card() {
    return (
        <div className="card">
            <div className="favorit">
                <img src="/img/heart-unliked.svg" alt='Unliked' />
            </div>
            <img width={133} height={120} src="/img/sneakers/1.jpg" alt="" />
            <p>Мужские Кроссовки Nike Air Max 270</p>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>12 999 руб.</b>
                </div>
                <button className="button">
                    <img width={11} height={11} src="/img/plus.svg" alt="plus" />
                </button>
            </div>
        </div>
    );
}

export default Card;