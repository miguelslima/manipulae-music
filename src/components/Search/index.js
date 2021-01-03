import React from "react";
import { Container, SearchContainer, Input, Button } from "./styles";

export default function Search() {
  return (
    <Container>
      <SearchContainer>
        <Input placeholder="Pesquise por artista, música ou álbum" />
        <Button>Pesquisar</Button>
      </SearchContainer>
    </Container>
  );
}
