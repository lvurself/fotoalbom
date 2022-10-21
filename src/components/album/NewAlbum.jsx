import React, { useState } from 'react';

export default function NewAlbum() {
  const [fileData, setFileData] = useState();

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
      }
    });
  };
  return (
    <>
      <h1>Create New Album</h1>
      <div className="container">
        <form onSubmit={submitHandler}>
          <div className="input-group mb-3">
            <input name="title" type="text" aria-label="nameAlbum" className="form-control" />
          </div>
          <div>
            <div className="input-group mb-3">
              <input name="description" type="text" aria-label="coments" className="form-control " />
            </div>
          </div>
          <div className="input-group">
            <input name="images" onChange={fileChangeHandler} type="file" multiple className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
          </div>
          <div className="button-group mb-3">
            <button type="submit" className="btn btn-outline-secondary">Add Album</button>
          </div>
        </form>
      </div>
    </>
  );
}
