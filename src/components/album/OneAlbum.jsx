import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function OneAlbum({ album }) {
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
        <img src="#" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{album.name}</h5>
          <Link to={`/home/album/${album.id}`} className="btn btn-light">View</Link>
        </div>
      </div>
    </div>
  );
}
