import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function PhotoList({ oneAlbumPhoto }) {
  const { albumId } = useParams();
  console.log('_____!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', albumId);
  const [photos, setPhotos] = useState(oneAlbumPhoto || []);
  useEffect(() => {
    fetch(`/api/home/album/${albumId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPhotos(data);
      });
  }, []);
  //   useEffect(() => {
  //     fetch('/home/album/:albumId')
  //     .then((res) => )
  //   });
  return (
    <>
      <h2 className="aboutTitle">Photo</h2>
      <div className="container">

        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {photos?.map((el, i) => (
              (i === 0) ? (
                <div className="carousel-item active" key={el.id}>
                  <img src={`http://localhost:3000/api/takephoto/${el.name}`} className="d-block w-100" alt="..." style={{ width: '300px', height: '500px' }} />
                </div>
              ) : (
                <div className="carousel-item" key={el.id}>
                  <img src={`http://localhost:3000/api/takephoto/${el.name}`} className="d-block w-100" alt="..." style={{ width: '300px', height: '500px' }} />
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
      </div>
      <div>
        <div className="borderedForm" style={{ position: 'relative' }}>
          <h1 className="castomHelp">Поддержите нас!</h1>
          <p className="unTitle" style={{ paddingLeft: '30px' }}>
            Elbrus Albums - free to
            use веб приложение. Наша команда
            разработчиков постоянно работает
            над улучшением проекта.
            Поддержите нас на
            {' '}
            <a style={{ textDecoration: 'none' }} href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">Patreon</a>
            .
          </p>
          <img src="/images/heart.png" className="kawai" alt="kawai" />
        </div>
      </div>
    </>
  );
}
