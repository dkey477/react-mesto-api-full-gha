import React from "react";
import { useRef, useEffect } from "react";

import PopupWithForm from "./PopupWithForm ";

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = useRef(null);

  function handleAvatarSubmit(evt) {
    evt.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  useEffect(() => {
    isOpen && (avatarRef.current.value = "");
  }, [isOpen]);

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleAvatarSubmit}
    >
      <input
        type="url"
        name="link"
        placeholder="Ссылка на аватар"
        className="popup__input popup__input_type_about"
        required=""
        id="input-url-avatar"
        ref={avatarRef}
      />
      <span className="popup__error" id="input-url-avatar-error" />
    </PopupWithForm>
  );
}
