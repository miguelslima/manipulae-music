import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchResultRequest } from "../../store/modules/search/actions";
import Tracks from "../Tracks";
import { Container, SearchContainer, Input, Button } from "./styles";

export default function Search() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState();

  function handleSearchApi(e) {
    e.preventDefault();
    if (query) {
      dispatch(searchResultRequest(query));
    }
  }

  const { album, track } = useSelector((state) => state.search.data);

  // console.log("Artista " + state.search.data?.searchResults);
  // console.log("Album " + state.search.data?.searchResults);
  // console.log("Tracks " + state.search.data?.searchResults);

  return (
    <Container>
      <SearchContainer onSubmit={(e) => handleSearchApi(e)}>
        <Input
          placeholder="Pesquise por artista, música ou álbum"
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button type="submit">Pesquisar</Button>
      </SearchContainer>

      {track.map((item) => (
        <Tracks tracks={item} />
      ))}
    </Container>
  );
}
