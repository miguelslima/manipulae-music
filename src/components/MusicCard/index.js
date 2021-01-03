import React, { useEffect, useState } from "react";
import api from "../../services/api";
import fetchJsonp from "fetch-jsonp";
import convertDurationInMinute from "../../utils/convertDurationInMinute";

import {
  Container,
  Title,
  ContainerScroll,
  ContainerTracks,
  TrackArtistName,
  TrackTitle,
  ContainerAlbum,
  ContainerArtist,
} from "./styles";

export default function MusicCard() {
  const [tracksTops, setTracksTops] = useState([]);
  const [albumsTops, setAlbumsTops] = useState([]);
  const [artistsTops, setArtistsTop] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(async () => {
    const resp = await (
      await fetchJsonp(
        `https://api.deezer.com/chart?index=${index}&limit=20&output=jsonp`
      )
    ).json();
    const data = await resp;

    console.log(data);

    setTracksTops(data.tracks);
    setAlbumsTops(data.albums);
    setArtistsTop(data.artists);

    return;
  }, []);

  return (
    <Container>
      <Title>Tracks</Title>

      {tracksTops.data?.map((track) => (
        <ContainerTracks key={track.id}>
          <img src={track.album.cover_small} />
          <TrackTitle>{track.title}</TrackTitle>
          <TrackArtistName>{track.artist.name}</TrackArtistName>
          <p>{convertDurationInMinute(track.duration)}</p>
          {/* <a href={track.album.tracklist}>Album of Artist</a> */}
        </ContainerTracks>
      ))}

      <Title>Albums</Title>

      <ContainerScroll>
        {albumsTops.data?.map((album) => (
          <ContainerAlbum>
            <img src={album.cover_medium} />
            <h3>{album.title}</h3>
            <p>{album.artist.name}</p>
          </ContainerAlbum>
        ))}
      </ContainerScroll>

      <Title>Artists</Title>

      <ContainerScroll>
        {artistsTops.data?.map((artist) => (
          <ContainerArtist>
            <img src={artist.picture_medium} />
            <p>{artist.name}</p>
          </ContainerArtist>
        ))}
      </ContainerScroll>
    </Container>
  );
}
