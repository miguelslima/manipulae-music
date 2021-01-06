import React from "react";
import { Container, ContainerArtist } from "./styles";

export default function Artist({ artists }) {
  return (
    <Container>
      <ContainerArtist>
        <img src={artists.picture_medium} />
        <p>{artists.name}</p>
      </ContainerArtist>
    </Container>
  );
}
