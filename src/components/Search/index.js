import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Container, SearchContainer, Input, Button } from "./styles";
import api from "../../services/api";

export default function Search() {
  const [album, setAlbum] = useState([]);

  useEffect(() => {
    async function searchMusic() {
      const data = await api.get("/artist/13/top?limit=10");

      console.log(data.data);
      setAlbum(data.data);
      return;
    }
    searchMusic();
  }, []);

  // const album = useSelector((state) => state);

  // console.log(album);

  return (
    <Container>
      <SearchContainer>
        <Input placeholder="Pesquise por artista, música ou álbum" />
        <Button>Pesquisar</Button>
      </SearchContainer>
      {album.data?.map((a) => (
        <div key={a.id}>
          <h1>{a.title}</h1>
          <span>{a.title_short}</span>

          <button type="button">Favoritar</button>
        </div>
      ))}
    </Container>
  );
}
