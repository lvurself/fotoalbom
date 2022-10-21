import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function OneAlbum({ album, allPhotos }) {
  console.log('=======>', album);
  //   console.log('qwertyu:', album);
  // const [photos, setPhotos] = useState(null);
  // useEffect(() => {
  //   fetch('/api/home/photos')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data);
  //       // console.log('sdfadfsfg', photos);
  //       setPhotos(data);
  //     });
  // }, []);
  //   const [oneAlCard, setOneAlCard] = useState(album || null);
  //   const { albumsId } = useParams();
  //   useEffect(() => {
  //     fetch(`/api/home/${albumsId}`)
  //       .then((res) => res.json())
  //       .then((data) => setOneAlCard(data));
  //   }, []);
  return (
    <section>
      <div className="container">
        <div className="card">
          <div className="content">
            <div className="imgBx">
              <img src="https://www.interfax.ru/ftproot/photos/photostory/2022/04/29/week/week7_1100.jpg" alt="..." />
            </div>
            <div className="contentBx">
              <h3 className="titleAlbum">{album.name}</h3>
              <span className="descriptionAlbum">{album.description}</span>
            </div>
          </div>
          <ul className="sci" style={{ textAlign: 'center' }}>
            <li style={{ textAlign: 'center' }}>
              <Link className="noLined" to={`/home/album/${album.id}`}>View</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
