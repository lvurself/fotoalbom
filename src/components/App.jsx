import React, { useState } from 'react';
import { Routes } from 'react-router-dom';
import Navbar from './other/Navbar';

export default function App({ user }) {
  const [currentuser, setCurrentUser] = useState(user || null);
  return (
    <>
      <Navbar />
      <Routes>
        <Route />
      </Routes>
    </>
  );
}
