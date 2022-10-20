import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AuthPAge({ setCurrentUser }) {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    });

    const data = await response.json();
    if (response.ok) {
      setCurrentUser(data);
      navigate('/');
    } else {
      console.log(data.message);
      setError(data.message);
    }
  };
  return (
    <div className="bodyForm">
      <div className="underForm">
        <div className="user">
          <header className="user__header">
            <h1 className="user__title">Авторизация</h1>
          </header>

          <form className="form">

            <div className="form__group">
              <input type="email" placeholder="Email" className="form__input" />
            </div>

            <div className="form__group">
              <input type="password" placeholder="Password" className="form__input" />
            </div>

            <button className="buton" type="button">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}
