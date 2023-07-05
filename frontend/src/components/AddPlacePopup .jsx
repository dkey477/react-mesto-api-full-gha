import React from "react";
import { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm ";

export default function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [cardName, setCardName] = useState("");
  const [cardLink, setCardLink] = useState("");

  useEffect(() => {
    if (isOpen) {
      setCardName("");
      setCardLink("");
    }
  }, [isOpen]);

  function handleCardNameChange(evt) {
    setCardName(evt.target.value);
  }

  function handleCardLinkChange(evt) {
    setCardLink(evt.target.value);
  }

  function handleAddPlaceSubmit(evt) {
    evt.preventDefault();
    onAddPlace({
      name: cardName,
      link: cardLink,
    });
  }

  return (
    <PopupWithForm
      name="addcards"
      title="Новое место"
      buttonText="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleAddPlaceSubmit}
    >
      <input
        type="text"
        name="name"
        placeholder="Название"
        className="popup__input popup__input_type_name"
        minLength={2}
        maxLength={30}
        required=""
        id="input-mesto"
        onChange={handleCardNameChange}
        value={cardName}
      />
      <span className="popup__error" id="input-mesto-error" />
      <input
        type="url"
        name="link"
        placeholder="Ссылка на картинку"
        className="popup__input popup__input_type_about"
        required=""
        id="input-url"
        onChange={handleCardLinkChange}
        value={cardLink}
      />
      <span className="popup__error" id="input-url-error" />
    </PopupWithForm>
  );
}
