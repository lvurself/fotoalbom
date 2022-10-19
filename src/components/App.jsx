import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './other/Navbar';
import StartPage from './main/StartPage';
import RegPage from './auth/RegPage';
import AuthPage from './auth/AuthPAge';
import HomePage from './main/HomePage';

export default function App({ user, albums, photos }) {
  const [currentuser, setCurrentUser] = useState(user || null);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/reg" element={<RegPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/home" element={<HomePage allAlbums={albums} />} />
      </Routes>
    </>
  );
}
