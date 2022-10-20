import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

export default function Navbar({ setCurrentUser, currentUser }) {
  const navigate = useNavigate();
  const logoutHandler = async (e) => {
    e.preventDefault();
    (await fetch('/auth/logout')).then((res) => {
      if (res.ok) { setCurrentUser(null); }
      navigate('/');
    });
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <img src="./images/logo.png" alt="logo" style={{ width: '8%', height: '8%' }} />
        <Link className="navbar-brand" href="/">ElbrusAlbum</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {!currentUser && (
            <>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Начальная страница</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/reg">Зарегистрироваться</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/auth">Авторизоваться</NavLink>
              </li>
            </>
            )}
            {currentUser && (
            <>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">MyAlbums</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Create album</a>
              </li>
              <li className="nav-item">
                <a onClick={logoutHandler} className="nav-link active" aria-current="page" href="/">Выйти</a>
              </li>
              {/* <li className="nav-item">
              {currentUser.name}
            </li> */}
            </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
