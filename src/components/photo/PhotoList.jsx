import React, { useEffect, useState } from 'react';

export default function PhotoList({ oneAlbumPhoto }) {
//   const [allPhotos, setAllPhotos] = useState(oneAlbumPhoto || null);
//   useEffect('//home/album/:albumId')
  return (
    <>

      <h2>Photo</h2>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {oneAlbumPhoto?.map((el) => (
            <div className="carousel-item active">
              <img src={el.name} className="d-block w-100" alt="..." />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* //
      {' '}
      <div>
        //
        {' '}
        {oneAlbumPhoto?.map((el) => <OnePhoto onePhoto={el} key={el.id} />)}
        // */}
      {/* </div> */}
    </>
  );
}
