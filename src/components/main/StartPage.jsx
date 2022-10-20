import React from 'react';
// import { Link } from 'react-router-dom';

export default function StartPage() {
  return (
    <>
      <div className="container">
        <div className="headImg">
          <div className="centered">
            <h1 className="onPhoto">
              ELBRUS/
              <br />
              ALBUM
            </h1>
          </div>
          <img className="headPhoto" src="./images/startpageHead.jpg" alt="start_image" />
        </div>
        <div className="about">
          <h2 className="aboutTitle">
            Добро пожаловать!
          </h2>
          <div className="container">
            <p className="unTitle">ELBRUS/ALBUMS - веб приложение, позволяющее пользователю:</p>
            <ul>
              <li className="startListing">создавать и редактировать фотоальбомы;</li>
              <li className="startListing">просматривать публичные фотоальбомы;</li>
              <li className="startListing">настраивать приватность Ваших фотоальбомов;</li>
            </ul>
          </div>
          <div className="container">
            <p className="unTitle">Наши преимущества:</p>
            <ul>
              <li className="startListing">бесплатное использование</li>
              <li className="startListing">удобный интерфейс;</li>
              <li className="startListing">надежность;</li>
              <li className="startListing">кросплатформенность(в разработке);</li>
            </ul>
          </div>

          {/* <h4 className="allertSticker">
          <Link className="authLink" to="/auth">Войдите</Link>
          {' '}
          или
          {' '}
          <Link className="authLink" to="/reg">Зарегистрируйтесь</Link>
          {' '}
          для начала работы с ELBRUS/ALBUMS.
        </h4> */}
        </div>
      </div>

      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Launch static backdrop modal
      </button>

      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Предупреждение</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              Для работы с веб приложением пройдите регистрацию или авторизацию
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">OK</button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
