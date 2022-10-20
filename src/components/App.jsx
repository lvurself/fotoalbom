import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './other/Navbar';
import StartPage from './main/StartPage';
import RegPage from './auth/RegPage';
import AuthPage from './auth/AuthPAge';
import HomePage from './main/HomePage';
import ScrollToTop from './ScrollToTop';

export default function App({ user }) {
  const [currentuser, setCurrentUser] = useState(user || null);
  return (
    <>
      <ScrollToTop />
      <Navbar currentuser={currentuser} setCurrentUser={setCurrentUser} />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/reg" element={<RegPage setCurrentUser={setCurrentUser} />} />
        <Route path="/auth" element={<AuthPage setCurrentUser={setCurrentUser} />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
      <footer className="footer">
        <div className="vertical">
          Created an decorated by:
          {' '}
          <a className="footerLinks" href="https://github.com/lvurself">@lvurself</a>
          {' '}
          <a className="footerLinks" href="https://github.com/DaniilBalashov">@DaniilBalashov</a>
          {' '}
          ,
          <a className="footerLinks" href="https://github.com/SoFunnyHah">@SoFunnyHah</a>
          .
        </div>
      </footer>
    </>
  );
}
