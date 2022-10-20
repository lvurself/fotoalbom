import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function RegPage({ setCurrentUser }) {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/auth/reg', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    });

    if (response.ok) {
      const data = await response.json();
      setCurrentUser(data);
      navigate('/home');
    }
  };

  return (
    <div className="bodyForm">
      <div className="underForm">
        <div className="user">
          <header className="user__header">
            <h1 className="user__title">Регистрация</h1>
          </header>

          <form className="form" onSubmit={handleSubmit}>
            <div className="form__group">
              <input name="name" type="text" placeholder="Username" className="form__input" />
            </div>

            <div className="form__group">
              <input name="email" type="email" placeholder="Email" className="form__input" />
            </div>

            <div className="form__group">
              <input name="password" type="password" placeholder="Password" className="form__input" />
            </div>

            <button className="buton" type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}
