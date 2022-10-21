import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import OneAlbum from '../album/OneAlbum';

export default function HomePage({ allAlbums }) {
  const [allCards, setAllCards] = useState(allAlbums || null);
  console.log(allCards, 'allcards');
  //   const { albumsId } = useParams();
  useEffect(() => {
    fetch('/api/home')
      .then((res) => res.json())
      .then((data) => setAllCards(data));
  }, []);
  return (
    <>
      <h1 className="aboutTitle">Albums</h1>
      <div className="container">
        <div style={{
          marginBottom: '100px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly',
        }}
        >
          {allCards?.map((el) => <OneAlbum album={el} key={el.id} />)}
        </div>
      </div>
    </>
  );
}
