import React, { useEffect, useState, useCallback } from "react";
import api from "../../services/api";
import fetchJsonp from "fetch-jsonp";
import convertDurationInMinute from "../../utils/convertDurationInMinute";

import { SiDeezer } from "react-icons/si";
import Slider from "react-slick";

import {
  Container,
  Title,
  ContainerTracks,
  TrackArtistName,
  TrackTitle,
  ContainerAlbum,
  ContainerArtist,
} from "./styles";
import PlayMusicPreview from "../PlayMusicPreview";
import { useSelector } from "react-redux";
import FavoritedButton from "../FavoritedButton";

import Tracks from "../Tracks";

export default function MusicCard() {
  const [tracksTops, setTracksTops] = useState([]);
  const [albumsTops, setAlbumsTops] = useState([]);
  const [artistsTops, setArtistsTop] = useState([]);
  const [favorited, setFavorited] = useState(true);
  const [index, setIndex] = useState(0);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#aaa",
          borderRadius: 200,
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#aaa",
          borderRadius: 20,
        }}
        onClick={onClick}
      />
    );
  }

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

  console.log(state);

  return (
    <Container>
      <Title>Tracks</Title>

      {tracksTops.data?.map((track) => (
        <Tracks tracks={track} />
      ))}

      <Title>Albums</Title>

      <div style={{ marginLeft: 20, marginRight: 20 }}>
        <Slider {...settings}>
          {albumsTops.data?.map((album) => (
            <ContainerAlbum>
              <img src={album.cover_medium} />
              <h3>{album.title}</h3>
              <p>{album.artist.name}</p>
            </ContainerAlbum>
          ))}
        </Slider>
      </div>

      <Title style={{ marginTop: 30 }}>Artists</Title>

      <div style={{ marginLeft: 20, marginRight: 20 }}>
        <Slider {...settings}>
          {artistsTops.data?.map((artist) => (
            <ContainerArtist>
              <img src={artist.picture_medium} />
              <p>{artist.name}</p>
            </ContainerArtist>
          ))}
        </Slider>
      </div>
    </Container>
  );
}
