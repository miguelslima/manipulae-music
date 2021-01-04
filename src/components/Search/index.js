import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchResult } from "../../store/modules/search/actions";
import { Container, SearchContainer, Input, Button } from "./styles";

export default function Search() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState();

  function handleSearchApi(e) {
    e.preventDefault();
    if (query) {
      dispatch(searchResult(query));
    }
  }

  return (
    <Container>
      <SearchContainer onSubmit={(e) => handleSearchApi(e)}>
        <Input
          placeholder="Pesquise por artista, música ou álbum"
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button type="submit">Pesquisar</Button>
      </SearchContainer>
    </Container>
  );
}
