import React from "react";

import { Container, ContainerAlbum } from "./styles";

export default function Albums({ albums }) {
  return (
    <Container>
      <ContainerAlbum>
        <img src={albums.cover_medium} />
        <h3>{albums.title}</h3>
        <p>{albums.artist.name}</p>
      </ContainerAlbum>
    </Container>
  );
}
