import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './other/Navbar';
import StartPage from './main/StartPage';
import RegPage from './auth/RegPage';
import AuthPage from './auth/AuthPage';
import HomePage from './main/HomePage';
import ScrollToTop from './ScrollToTop';
import PhotoList from './photo/PhotoList';
import NewAlbum from './album/NewAlbum';
import MyAlbums from './album/MyAlbums';

export default function App({
  user, albums, photos, oneAlbumPhoto,
}) {
  const [currentUser, setCurrentUser] = useState(user || null);
  return (
    <>
      <ScrollToTop />
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/reg" element={<RegPage setCurrentUser={setCurrentUser} />} />
        <Route path="/auth" element={<AuthPage setCurrentUser={setCurrentUser} />} />
        <Route path="/home" element={<HomePage allAlbums={albums} allPhotos={photos} />} />
        <Route path="/home/album/:albumId" element={<PhotoList oneAlbumPhoto={oneAlbumPhoto} allAlbums={albums} />} />
        <Route path="/home/newalbum" element={<NewAlbum />} />
        <Route path="/home/myalbums" element={<MyAlbums allAlbums={albums} />} />
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
