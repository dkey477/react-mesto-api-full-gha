import React from "react";
import imageOk from "../images/imageOk.png";
import imageError from "../images/imageError.png";

export default function InfoTooltip({ isOpen, onClose, isAuthComplete }) {
  return (
    <div className={`popup popup_type_tooltip ${isOpen ? "popup_open" : ""}`}>
      <div className="popup__contener popup__contener-info">
        <button
          className="popup__close"
          type="button"
          aria-label="Закрыть попап"
          onClick={onClose}
        />
        <div className="popup__content popup__content_type_info" name="popup">
          <img
            className="popup__logo-info"
            src={isAuthComplete ? imageOk : imageError}
            alt="указатель"
          />
          <h2 className="popup__text-info">
            {isAuthComplete
              ? "Вы успешно зарегистрировались!"
              : "Что-то пошло не так! Попробуйте ещё раз."}
          </h2>
        </div>
      </div>
    </div>
  );
}
