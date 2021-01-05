import React, { useEffect, useState, useCallback } from "react";

import convertDurationInMinute from "../../utils/convertDurationInMinute";

import { SiDeezer } from "react-icons/si";

import {
  Container,
  Title,
  ContainerTracks,
  TrackArtistName,
  TrackTitle,
} from "./styles";
import PlayMusicPreview from "../PlayMusicPreview";
import FavoritedButton from "../FavoritedButton";

export default function Tracks({ tracks }) {
  return (
    <Container>
      <ContainerTracks key={tracks?.id}>
        <img src={tracks?.album.cover_small} />
        <TrackTitle>{tracks?.title}</TrackTitle>
        <TrackArtistName>{tracks?.artist.name}</TrackArtistName>
        <p>{convertDurationInMinute(tracks?.duration)}</p>
        <PlayMusicPreview musicPreview={tracks?.preview} />
        <a href={tracks?.link} target="_blank">
          <SiDeezer size={20} fill="#95d7d3" />
        </a>

        <FavoritedButton favoriteTrack={tracks} />
      </ContainerTracks>
    </Container>
  );
}
