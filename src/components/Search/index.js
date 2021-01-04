import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, SearchContainer, Input, Button } from "./styles";
import api from "../../services/api";
import { searchAlbumApi } from "../../store/modules/album/actions";

export default function Search() {
  const dispatch = useDispatch();


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
