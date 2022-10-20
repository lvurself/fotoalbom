import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function PhotoList({ oneAlbumPhoto }) {
  const { albumId } = useParams();
  const [photos, setPhotos] = useState(oneAlbumPhoto || []);
  useEffect(() => {
    fetch(`/api/home/album/${albumId}`)
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);
  //   useEffect(() => {
  //     fetch('/home/album/:albumId')
  //     .then((res) => )
  //   });
  return (
    <div className="container">

      <h2>Photo</h2>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {photos?.map((el, i) => (
            (i === 0) ? (
              <div className="carousel-item active" key={el.id}>
                <img src={el.name} className="d-block w-100" alt="..." style={{ width: '300px', height: '500px' }} />
              </div>
            ) : (
              <div className="carousel-item" key={el.id}>
                <img src={el.name} className="d-block w-100" alt="..." style={{ width: '300px', height: '500px' }} />
              </div>
            )
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
    </div>
  );
}
