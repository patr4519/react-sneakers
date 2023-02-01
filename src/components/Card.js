function Card({title, price, imageUrl}) {
    return (
        <div className="card">
            <div className="favorit">
                <img src="/img/heart-unliked.svg" alt='Unliked' />
            </div>
            <img width={133} height={120} src={imageUrl} alt="" />
            <p>{title}</p>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <button className="button">
                    <img width={11} height={11} src="/img/plus.svg" alt="plus" />
                </button>
            </div>
        </div>
    );
}

export default Card;