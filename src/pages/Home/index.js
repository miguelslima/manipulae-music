import React from "react";
import { useSelector } from "react-redux";
import MusicTop from "../../components/MusicTop";
import Search from "../../components/Search";
import ListFavorit from "../ListFavorit";
import { Container } from "./styles";

export default function Home() {
  const state = useSelector((state) => state.search.findSearch);

  return (
    <Container>
      <Search />
      {state === false && <MusicTop />}
    </Container>
  );
}
