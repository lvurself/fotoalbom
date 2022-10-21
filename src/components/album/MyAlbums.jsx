import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function MyAlbums({ setMyAllCards, myAllCards }) {
  console.log('myAllAlbums', myAllCards);
  useEffect(() => {
    fetch('/api/home/myalbums')
      .then((res) => res.json())
      .then((data) => setMyAllCards(data));
  }, []);
  return (
    <div className="container">

      <h1>My Albums111</h1>
      {myAllCards?.map((el) => (
        <div key={el.id}>
          <div className="card" style={{ width: '18rem' }}>
            <img src="https://www.interfax.ru/ftproot/photos/photostory/2022/04/29/week/week7_1100.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{el?.name}</h5>
              <Link to={`/home/myalbums/${el?.id}`} className="btn btn-light">View</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
