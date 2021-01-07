import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  searchResultRequest,
  resetSearch,
} from "../../store/modules/search/actions";
import Tracks from "../Tracks";
import {
  Container,
  SearchContainer,
  Input,
  Button,
  BackButton,
  TitleSearch,
  ContainerSearchTrack,
} from "./styles";

import { FaArrowLeft } from "react-icons/fa";

export default function Search() {
  const dispatch = useDispatch();
  const [word, setWord] = useState();
  const { findSearch } = useSelector((state) => state.search);
  const [searchResults, setSearchResults] = useState(findSearch);

  useEffect(() => {
    setSearchResults(findSearch);
  }, [findSearch]);

  function handleSearchApi(e) {
    e.preventDefault();
    if (word) {
      dispatch(searchResultRequest(word));
    }
  }

  function handleButton() {
    dispatch(resetSearch(false));
  }

  const settings = {
    className: "slider variable-width",
    focusOnSelect: true,
    dots: false,
    infinite: false,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };

  const { album, track } = useSelector((state) => state.search.data);

  return (
    <Container>
      {findSearch ? (
        <>
          <BackButton>
            <button onClick={() => handleButton()}>
              <FaArrowLeft />
              <span>Voltar</span>
            </button>
          </BackButton>
          <TitleSearch>Resultado da pesquisa para: {word}</TitleSearch>
        </>
      ) : (
        <SearchContainer onSubmit={(e) => handleSearchApi(e)}>
          <Input
            placeholder="Pesquise por artista, música ou álbum"
            onChange={(e) => setWord(e.target.value)}
          />
          <Button type="submit">Pesquisar</Button>
        </SearchContainer>
      )}

      <ContainerSearchTrack>
        {track?.map((item) => (
          <Tracks tracks={item} />
        ))}
      </ContainerSearchTrack>

      {/* <Slider {...settings}>
          {album?.map((album) => (
            <Albums albums={album} />
          ))}
        </Slider>
       */}
    </Container>
  );
}
