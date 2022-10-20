import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './other/Navbar';
import StartPage from './main/StartPage';
import RegPage from './auth/RegPage';
import AuthPage from './auth/AuthPage';
import HomePage from './main/HomePage';
import PhotoList from './photo/PhotoList';
import NewAlbum from './album/NewAlbum';

export default function App({
  user, albums, photoss, oneAlbumPhoto,
}) {
  const [currentuser, setCurrentUser] = useState(user || null);
  return (
    <>
      <Navbar currentUser={currentuser} setCurrentUser={setCurrentUser} />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/reg" element={<RegPage setCurrentUser={setCurrentUser} />} />
        <Route path="/auth" element={<AuthPage setCurrentUser={setCurrentUser} />} />
        <Route path="/home" element={<HomePage allAlbums={albums} />} />
        <Route path="/home/album/:albumId" element={<PhotoList oneAlbumPhoto={oneAlbumPhoto} />} />
        <Route path="/home/newalbum" element={<NewAlbum />} />
      </Routes>
    </>
  );
}
