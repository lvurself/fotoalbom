import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NewAlbum() {
  const [fileData, setFileData] = useState();
  const navigate = useNavigate();
  const fileChangeHandler = (e) => {
    console.log(e.target.files);
    setFileData(e.target.files);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(data);
    data.append('images', fileData);
    fetch('/image/photo', {
      method: 'POST',
      body: data,
    }).then((res) => {
      if (res.ok) {
        console.log('its Work');
        navigate('/home');
      }
    });
  };
  return (
    <>
      <h1 className="aboutTitle">Create New Album</h1>
      <div className="container" style={{ marginBottom: '400px' }}>
        <form onSubmit={submitHandler}>
          <div className="input-group mb-3">
            <input placeholder="Title" name="title" type="text" aria-label="nameAlbum" className="form-control" />
          </div>

          <div>
            <div className="input-group mb-3">
              <input placeholder="Description" name="description" type="text" aria-label="coments" className="form-control " />
            </div>
          </div>
          <div className="input-group">
            <input name="images" onChange={fileChangeHandler} type="file" multiple className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
          </div>
          <div className="form-check">
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              <input
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
          <div className="button-group mb-3">
            <button type="submit" className="btn btn-outline-secondary">Add Album</button>
          </div>
        </form>
      </div>
    </>
  );
}
