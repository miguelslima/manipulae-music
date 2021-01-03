import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, SearchContainer, Input, Button } from "./styles";
import api from "../../services/api";
import { searchAlbumApi } from "../../store/modules/album/actions";

export default function Search() {
  const dispatch = useDispatch();
  const [albums, setAlbums] = useState([]);

  useEffect(async () => {
    const data = await api.get("/artist/13/top?limit=10");

    console.log(data.data.data);
    setAlbums(data.data.data);
    return;
  }, []);

  const handleSearchAlbumApi = useCallback(
    (album) => {
      dispatch(searchAlbumApi(album));
      console.log("clicou em " + album.title);
    },
    [dispatch]
  );

  const state = useSelector(state => state);

  console.log(state);

  return (
    <Container>
      <SearchContainer>
        <Input placeholder="Pesquise por artista, música ou álbum" />
        <Button>Pesquisar</Button>
      </SearchContainer>
      {albums.map((album) => (
        <div key={album.id}>
          <h1>{album.title}</h1>
          <span>{album.title_short}</span>

          <button type="button" onClick={() => handleSearchAlbumApi(album)}>
            Favoritar
          </button>
        </div>
      ))}
    </Container>
  );
}
