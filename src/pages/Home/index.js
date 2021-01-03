import React from "react";
import MusicTop from "../../components/MusicTop";
import Search from "../../components/Search";

import { Container } from "./styles";

export default function Home() {
  return (
    <Container>
      <Search />

      <MusicTop />
    </Container>
  );
}
