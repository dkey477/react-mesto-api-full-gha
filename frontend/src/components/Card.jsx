import React from "react";
import { useContext } from "react";

import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Card({ card, onCardclick, onCardDelete, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);

  const isOwn = card.owner._id === currentUser._id;

  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `element__icon ${
    isLiked && "element__icon_active_on"
  }`;

  function handleClick() {
    onCardclick(card);
  }

  function handleCardDelete() {
    onCardDelete(card);
  }

  function handleCardLike() {
    onCardLike(card);
  }

  return (
    <li className="element">
      {isOwn && (
        <button
          className="element__basket"
          type="button"
          aria-label="Удалить место"
          onClick={handleCardDelete}
        />
      )}
      <img
        className="element__image"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <div className="element__caption">
        <h2 className="element__text">{card.name}</h2>
        <div className="element__icon-check">
          <button
            className={cardLikeButtonClassName}
            onClick={handleCardLike}
            type="button"
            aria-label="Установка лайка"
          />
          <span className="element__icon-quantity">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}
