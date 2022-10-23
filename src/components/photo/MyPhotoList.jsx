import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function MyPhotoList({ myAllAlbums, oneAlbumPhoto }) {
  const navigate = useNavigate();
  const { albumId } = useParams();
  const [photos, setPhotos] = useState(oneAlbumPhoto || []);
  const [thisAlbum, setThisAlbum] = useState(myAllAlbums || []);
  const [inputs, setInputs] = useState({});
  const [clickView, setClickView] = useState(false);

  const changeHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const clickHandler = () => {
    setClickView(true);
  };

  useEffect(() => {
    fetch(`/api/home/myalbums/${albumId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPhotos(data);
      });
  }, []);

  useEffect(() => {
    fetch('/api/home/myalbums')
      .then((res) => res.json())
      .then((data) => setThisAlbum(data));
  }, []);

  const editHandler = async () => {
    fetch(`/api/home/myalbums/${albumId}/edit`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    }).then((data) => data.json())
      .then((data) => {
        setThisAlbum(data);
        setInputs({});
        navigate('/home/myalbums');
      });
  };
  const deleteHandler = async () => {
    const res = await fetch(`/api/home/myalbums/${albumId}/delete`, { method: 'DELETE' });
    if (res.ok) {
      navigate('/home/myalbums');
    }
  };

  return (
    <div className="container">

      <h2>{thisAlbum.name}</h2>
      {' '}
      <h2>{thisAlbum.description}</h2>

      { clickView ? (
        <>
          <div className="form-check">
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              <input
                onChange={changeHandler}
                value="true"
                name="private"
                className="form-check-input"
                type="radio"
                id="flexRadioDefault1"
              />
              Private
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              <input
                onChange={changeHandler}
                value="false"
                name="private"
                className="form-check-input"
                type="radio"
                id="flexRadioDefault2"
                checked
              />
              Public
            </label>
          </div>
          <div className="input-group mb-3">
            <input
              onChange={changeHandler}
              value={inputs.name || ''}
              type="text"
              name="name"
              className="form-control"
              placeholder="Название"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
          </div>
          <div className="input-group mb-3">
            <input
              onChange={changeHandler}
              value={inputs.description || ''}
              type="text"
              name="description"
              className="form-control"
              placeholder="Описание"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
          </div>
          <button onClick={deleteHandler} type="submit" className="btn btn-outline-danger">Удалить альбом</button>
          <button onClick={editHandler} type="submit" className="btn btn-outline-warning">Изменить</button>
        </>
      )
        : (<button onClick={clickHandler} type="submit" className="btn btn-outline-info">Изменить</button>
        )}

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
  );
}
