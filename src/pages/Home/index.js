import React, { useEffect, useState } from "react";
import Search from "../../components/Search";

import api from "../../services/api";

import { Container } from "./styles";

export default function Home() {
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   async function searchMusic() {
  //     const data = await api.get("/search/artist/?q=eminem&index=0&limit=2");

  //     console.log(data.name);
  //     return;
  //   }
  //   searchMusic();
  // });

  return (
    <Container>
      <Search />
    </Container>
  );
}
