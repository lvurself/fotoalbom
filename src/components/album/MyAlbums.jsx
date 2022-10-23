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
    <>
      <h1 className="aboutTitle">My Albums</h1>
      <div className="container" style={{ marginBottom: '600px' }}>
        <div style={{
          marginBottom: '100px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly',
        }}
        >
          {myAllCards?.map((el) => (
            <section>
              <div className="container" key={el.id}>
                <div className="card">
                  <div className="content">
                    <div className="imgBx">
                      <img src="https://www.interfax.ru/ftproot/photos/photostory/2022/04/29/week/week7_1100.jpg" alt="..." />
                    </div>
                    <div className="contentBx">
                      <h3 className="titleAlbum">{el?.name}</h3>
                      <span className="descriptionAlbum">{el?.description}</span>
                    </div>
                  </div>
                  <ul className="sci" style={{ textAlign: 'center' }}>
                    <li style={{ textAlign: 'center' }}>
                      <Link className="noLined" to={`/home/myalbums/${el?.id}`}>View</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

          ))}
        </div>
      </div>
    </>
  );
}
