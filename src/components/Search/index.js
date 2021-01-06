import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { searchResultRequest } from "../../store/modules/search/actions";
import Albums from "../Albums";
import Tracks from "../Tracks";
import {
  Container,
  SearchContainer,
  Input,
  Button,
  TitleSearch,
  ContainerSearchTrack,
} from "./styles";

export default function Search() {
  const dispatch = useDispatch();
  const [word, setWord] = useState();

  function handleSearchApi(e) {
    e.preventDefault();
    if (word) {
      dispatch(searchResultRequest(word));
    }
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
  const { findSearch } = useSelector((state) => state.search);

  return (
    <Container>
      <SearchContainer onSubmit={(e) => handleSearchApi(e)}>
        <Input
          placeholder="Pesquise por artista, música ou álbum"
          onChange={(e) => setWord(e.target.value)}
        />
        <Button type="submit">Pesquisar</Button>
      </SearchContainer>

      {findSearch && (
        <TitleSearch>Resultado da pesquisa para: {word}</TitleSearch>
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
