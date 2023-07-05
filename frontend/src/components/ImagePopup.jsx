import React from "react";

export default function ImagePopup({ card, isOpen, onClose }) {

    return (
    <div className={`popup popup_type_image ${isOpen ? "popup_open" : ""}`}>
          <div className="popup__contener popup__contener_type_image">
            <button
              className="popup__close"
              type="button"
              aria-label="Закрыть попап"
              onClick={onClose}
            />
            <img className="popup__image" 
            src={card.link}
            alt={card.name}
            />
            <h2 className="popup__title popup__title_type_image" />{card.name}
          </div>
    </div>
    )
}