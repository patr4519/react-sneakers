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
                <img className="plus" src="/img/btn-plus.svg" alt="btn-plus" />
            </div>
        </div>
    );
}

export default Card;