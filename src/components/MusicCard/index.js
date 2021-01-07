import React, { useEffect, useState } from "react";
import fetchJsonp from "fetch-jsonp";

import Slider from "react-slick";

import { Container, Title } from "./styles";
import { useSelector } from "react-redux";

import Tracks from "../Tracks";
import Albums from "../Albums";
import Artist from "../Artists";

export default function MusicCard() {
  const [tracksTops, setTracksTops] = useState([]);
  const [albumsTops, setAlbumsTops] = useState([]);
  const [artistsTops, setArtistsTop] = useState([]);
  const [index, setIndex] = useState(0);

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

  useEffect(async () => {
    const resp = await (
      await fetchJsonp(
        `https://api.deezer.com/chart?index=${index}&limit=20&output=jsonp`
      )
    ).json();
    const data = await resp;

    setTracksTops(data.tracks);
    setAlbumsTops(data.albums);
    setArtistsTop(data.artists);

    return;
  }, []);

  const state = useSelector((state) => state);

  return (
    <Container>
      <Title>Tracks</Title>

      {tracksTops.data?.map((track) => (
        <Tracks tracks={track} />
      ))}

      <Title>Albums</Title>

      <Slider {...settings}>
        {albumsTops.data?.map((album) => (
          <Albums albums={album} />
        ))}
      </Slider>

      <Title style={{ marginTop: 30 }}>Artists</Title>

      <Slider {...settings}>
        {artistsTops.data?.map((artist) => (
          <Artist artists={artist} />
        ))}
      </Slider>
    </Container>
  );
}
