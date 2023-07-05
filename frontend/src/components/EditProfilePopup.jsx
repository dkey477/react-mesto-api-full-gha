import React from "react";
import { useState, useContext, useEffect } from "react";
import PopupWithForm from "./PopupWithForm ";

import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleDescriptionChange(evt) {
    setDescription(evt.target.value);
  }

  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="name"
        placeholder="Ваше имя"
        className="popup__input popup__input_type_name"
        minLength={2}
        maxLength={40}
        required=""
        id="input-name"
        onChange={handleNameChange}
        value={name || ""}
      />
      <span className="popup__error" id="input-name-error" />
      <input
        type="text"
        name="job"
        placeholder="Сфера деятельности"
        className="popup__input popup__input_type_about"
        minLength={3}
        maxLength={200}
        required=""
        id="input-job"
        onChange={handleDescriptionChange}
        value={description || ""}
      />
      <span className="popup__error" id="input-job-error" />
    </PopupWithForm>
  );
}
