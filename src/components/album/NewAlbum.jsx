import React from 'react';

export default function NewAlbum() {
  return (
    <div className="container">
      <h1>Create New Album</h1>
      <div>
        <div className="input-group mb-3">
          <input type="text" aria-label="nameAlbum" className="form-control" />
        </div>
        <div>
          <div className="input-group mb-3">
            <input type="text" aria-label="coments" className="form-control " />
          </div>
        </div>
        <div className="button-group mb-3">
          <button type="button" className="btn btn-outline-secondary">Add Album</button>
          <button type="button" className="btn btn-outline-secondary">Secondary</button>
        </div>
      </div>
    </div>
  );
}
