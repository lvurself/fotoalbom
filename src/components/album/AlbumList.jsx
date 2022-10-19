import React from 'react';
import OneAlbum from './OneAlbum';

export default function AlbumList({ albums }) {
  return (
    <div>
      {albums.map((el) => <OneAlbum album={el} key={el.id} />)}
    </div>
  );
}
