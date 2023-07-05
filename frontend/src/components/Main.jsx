import React from "react";
import Card from "./Card.jsx";

import { CurrentUserContext } from "../contexts/CurrentUserContext.jsx";
import { useContext } from "react";

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardclick,
  cards,
  onCardLike,
  onCardDelete,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main>
      <section className="profile">
        <button
          className="profile__button-image"
          type="button"
          aria-label="Изменить аватар"
          onClick={onEditAvatar}
        >
          <img
            className="profile__image"
            src={currentUser.avatar}
            alt={currentUser.name}
          />
        </button>
        <div>
          <div className="profile__content">
            <h1 className="profile__title">{currentUser.name}</h1>
            <button
              className="profile__popup-open"
              type="button"
              aria-label="Изменить профиль"
              onClick={onEditProfile}
            />
          </div>
          <p className="profile__subtitle">{currentUser.about}</p>
        </div>
        <button
          className="profile__rectangle"
          type="button"
          aria-label="Добавить место"
          onClick={onAddPlace}
        />
      </section>
      <section>
        <ul className="elements">
          {cards.map((card) => (
            <Card
              card={card}
              onCardclick={onCardclick}
              key={card._id}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
