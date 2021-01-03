import React, { useEffect, useState } from "react";
import Search from "../../components/Search";

import api from "../../services/api";

import { Container } from "./styles";

export default function Home() {
  const [artits, setArtits] = useState({});

  // useEffect(() => {
  //   async function searchMusic() {
  //     const data = await api.get("/search/artist/?q=eminem&index=0&limit=10");

  //     // console.log(data.data);
  //     setArtits(data.data);
  //     return;
  //   }
  //   searchMusic();
  // }, []);

  // console.log(artits.data);

  return (
    <Container>
      <Search />
      {/* {artits.data?.map((artit) => (
        <div key={artit.id}>
          <h1>{artit.name}</h1>
          <img src={artit.picture} />
        </div>
      ))} */}
    </Container>
  );
}
