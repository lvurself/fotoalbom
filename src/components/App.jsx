import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './other/Navbar';
import StartPage from './main/StartPage';
import RegPage from './auth/RegPage';
import AuthPage from './auth/AuthPAge';
import HomePage from './main/HomePage';

export default function App({ user }) {
  const [currentuser, setCurrentUser] = useState(user || null);
  return (
    <>
      <Navbar currentuser={currentuser} setCurrentUser={setCurrentUser} />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/reg" element={<RegPage setCurrentUser={setCurrentUser} />} />
        <Route path="/auth" element={<AuthPage setCurrentUser={setCurrentUser} />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </>
  );
}
