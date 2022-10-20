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
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
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

                <Link className="nav-link active" aria-current="page" to="/home/myalbums">MyAlbums</Link>
                <Link className="nav-link active" aria-current="page" to={`/home/albums/${currentUser.id}`}>MyAlbums</Link>

              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home/newalbum">Create album</Link>
              </li>
              <li className="nav-item">
                <a onClick={logoutHandler} className="nav-link" href="/logout">Выход</a>
              </li>
              <li className="nav-item">
                <p className="nav-link">{currentUser.name}</p>
              </li>
            </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
