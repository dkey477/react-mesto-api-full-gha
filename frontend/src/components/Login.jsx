import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(evt) {
    evt.preventDefault();
    const { email, password } = formValue;
    onLogin(email, password);
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  }

  return (
    <main className="sign">
      <div className="sign__container">
        <h3 className="sign__title">Вход</h3>
        <form className="sign__form" onSubmit={handleSubmit}>
          <fieldset className="sign__input-block">
            <input
              className="sign__input"
              type="email"
              name="email"
              placeholder="Email"
              minLength="2"
              maxLength="40"
              required
              onChange={handleChange}
              value={formValue.email || ""}
            />
            <input
              className="sign__input"
              type="password"
              name="password"
              placeholder="Пароль"
              minLength="5"
              maxLength="20"
              required
              onChange={handleChange}
              value={formValue.password || ""}
            />
          </fieldset>
          <button className="sign__button" type="submit">
            Войти
          </button>
        </form>
      </div>
    </main>
  );
}
