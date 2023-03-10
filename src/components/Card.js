import React from "react";

function Card({title, price, imageUrl, obj, addToCart, onAddToFavorites}) {
    const [isAdded, setIdAdded] = React.useState(true);
    const [isFavorite, setIsFavorite] = React.useState(true);

    const handlePlus = () => {
        setIdAdded((prev) => !prev);
        addToCart(obj);
    }

    const onClickFavorite = () => {
        onAddToFavorites();
        setIsFavorite(!isFavorite);
    }

    return (
        <div className="card">
            <div className="favorit">
                <img onClick={onClickFavorite} src={isFavorite ? 'img/unliked.png' : 'img/liked.svg'} alt='Unliked' />
            </div>
            <img width={133} height={120} src={imageUrl} alt="" />
            <p>{title}</p>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <img onClick={handlePlus} className="plus" src={isAdded ? 'img/btn-plus.svg' : 'img/btn-checked.svg'} alt="btn-plus" />
            </div>
        </div>
    );
}

export default Card;