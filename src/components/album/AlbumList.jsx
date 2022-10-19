import React from 'react';
import OneAlbum from './OneAlbum';

export default function AlbumList({ allAlbums }) {
  return (
    <div>
      {allAlbums.map((el) => <OneAlbum album={el} key={el.id} />)}
    </div>
  );
}
