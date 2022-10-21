import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function OneAlbum({ album }) {
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
    <div>
      <div className="card" style={{ width: '18rem' }}>
        <img src="https://www.interfax.ru/ftproot/photos/photostory/2022/04/29/week/week7_1100.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{album.name}</h5>
          <Link to={`/home/album/${album.id}`} className="btn btn-light">View</Link>
        </div>
      </div>
    </div>
  );
}
