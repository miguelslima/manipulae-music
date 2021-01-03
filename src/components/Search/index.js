import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, SearchContainer, Input, Button } from "./styles";
import api from "../../services/api";
import { searchAlbumApi } from "../../store/modules/album/actions";

export default function Search() {
  const dispatch = useDispatch();
  const [albums, setAlbums] = useState([]);
  const [musicTops, setMusicTops] = useState([])

  useEffect(async () => {
    const data = await api.get("/chart/0");

    console.log(data.data);
    // setAlbums(data.data.data);
    return;
  }, []);

  const handleSearchAlbumApi = useCallback(
    (album) => {
      dispatch(searchAlbumApi(album));
      // console.log("clicou em " + album.title);
    },
    [dispatch]
  );

  const state = useSelector((state) => state);

  console.log(state);

  return (
    <Container>
      <SearchContainer>
        <Input placeholder="Pesquise por artista, música ou álbum" />
        <Button>Pesquisar</Button>
      </SearchContainer>
      
    </Container>
  );
}
