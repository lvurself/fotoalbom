import React from 'react';
import OneAlbum from '../album/OneAlbum';

export default function HomePage({ allAlbums }) {
  console.log(allAlbums);
  return (
    <div>
      <h1>Albums</h1>
      {allAlbums?.map((el) => <OneAlbum album={el} key={el.id} />)}
    </div>
  );
}
