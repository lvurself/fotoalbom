import React from 'react';

export default function MyAlbums() {
  return (
    <>
      <h1>My Albums</h1>
      <div>
        <div className="card" style={{ width: '18rem' }}>
          <img src="https://www.interfax.ru/ftproot/photos/photostory/2022/04/29/week/week7_1100.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{album.name}</h5>
            <Link to={`/home/album/${album.id}`} className="btn btn-light">View</Link>
          </div>
        </div>
      </div>
    </>
  );
}
