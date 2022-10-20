import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

export default function Navbar({ setCurrentUser, currentUser }) {
  const navigate = useNavigate();
  const logoutHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/auth/logout');
    if (response.ok) {
      setCurrentUser(null);
      navigate('/');
    }
  };
  console.log('currentuser', currentUser);
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-castom">
      <div className="container-fluid">
        {/* <img src="./images/logo.png" alt="logo" style={{ width: '8%', height: '8%' }} /> */}
        <Link className="castomLogo" href="/">ElbrusAlbum</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {!currentUser && (
            <>
              <NavLink className="myColor" aria-current="page" to="/">Начальная страница</NavLink>
              <NavLink className="myColor" aria-current="page" to="/reg">Регистрация</NavLink>
              <NavLink className="myColor" aria-current="page" to="/auth">Авторизация</NavLink>
            </>
            )}
            {currentUser && (
            <>
              <Link className="myColor" aria-current="page" to="/home">Home</Link>
              {/* <a className="myColor" aria-current="page" href="#">MyAlbums</a> */}
              <Link className="myColor" aria-current="page" to="/home/myalbums">MyAlbums</Link>
              <Link className="myColor" aria-current="page" to="/home/newalbum">Create album</Link>
              <a onClick={logoutHandler} className="myColor" aria-current="page" href="/">Выйти</a>
              <li className="myColor">
                {currentUser.name}
              </li>
            </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
