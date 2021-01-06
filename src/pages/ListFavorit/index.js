import React, { useState } from "react";
import { useSelector } from "react-redux";

import convertDurationInMinute from "../../utils/convertDurationInMinute";

import { SiDeezer } from "react-icons/si";

import {
  Container,
  ContainerTracks,
  TrackArtistName,
  TrackTitle,
  Title,
} from "./styles";
import PlayMusicPreview from "../../components/PlayMusicPreview";
import FavoritedButton from "../../components/FavoritedButton";

export default function ListFavorit() {
  const state = useSelector((state) => state);

  const [tracksFavorites, setTracksFavorites] = useState(state.album);

  // console.log(tracksFavorites);

  return (
    <Container>
      <Title>Listagem musicas favoritas</Title>

      {tracksFavorites.data?.map((track) => (
        <ContainerTracks key={track.id}>
          <img src={track.album.album.cover_small} />
          <TrackTitle>{track.album.title}</TrackTitle>
          <TrackArtistName>{track.album.artist.name}</TrackArtistName>
          <p>{convertDurationInMinute(track.album.duration)}</p>
          <PlayMusicPreview musicPreview={track.album.preview} />
          <a href={track.album.link} target="_blank">
            <SiDeezer size={20} fill="#95d7d3" />
          </a>

          <FavoritedButton favoriteTrack={track} />
        </ContainerTracks>
      ))}
    </Container>
  );
}
