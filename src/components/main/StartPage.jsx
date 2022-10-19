import React from 'react';
import { Link } from 'react-router-dom';

export default function StartPage() {
  return (
    <div className="container">
      <div className="headImg" style={{ width: '100%', height: '400px', position: 'relative' }}>
        <div
          className="centered"
          style={{
            color: 'white', backgroundColor: '#8d776a', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          }}
        >
          <h1 style={{ marginBottom: '0' }}>
            ELBRUS/
            <br />
            ALBUM
          </h1>
        </div>
        <img src="./images/startpageHead.jpg" alt="start_image" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="about">
        <h2 style={{ textAlign: 'center' }}>Добро пожаловать!</h2>
        <div>
          <p>ELBRUS/ALBUMS - веб приложение, позволяющее полльзователю:</p>
          <ul>
            <li>создавать и редактировать фотоальбомы;</li>
            <li>просматривать публичные фотоальбомы;</li>
            <li>настраивать приватность Ваших фотоальбомов;</li>
          </ul>
        </div>

        <div style={{ textAlign: 'center' }}>
          <h4>
            <Link to="/auth">Войдите</Link>
            {' '}
            или
            {' '}
            <Link to="/reg">Зарегистрируйтесь</Link>
            {' '}
            для начала работы с ELBRUS/ALBUMS.
          </h4>
        </div>
      </div>
    </div>
  );
}
