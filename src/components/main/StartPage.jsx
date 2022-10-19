import React from 'react';
import Link from 'react-router-dom';

export default function StartPage() {
  return (
    <div className="container">
      <img src="#" alt="start_image" />
      <div className="about">
        <h1>ELBRUS/ALBUM</h1>
        <p>Добро пожаловать!</p>
        <div>
          <p>ELBRUS/ALBUMS - веб приложение, позволяющее полльзователю:</p>
          <ul>
            <li>создавать и редактировать фотоальбомы;</li>
            <li>просматривать публичные фотоальбомы;</li>
            <li>настраивать приватность Ваших фотоальбомов;</li>
          </ul>
        </div>

        <div>
          <h3>
            <Link to="/auth">Войдите</Link>
            {' '}
            или
            {' '}
            <Link to="/reg">Зарегистрируйтесь</Link>
            {' '}
            для начала работы с ELBRUS/ALBUMS.
          </h3>
        </div>
      </div>
    </div>
  );
}
