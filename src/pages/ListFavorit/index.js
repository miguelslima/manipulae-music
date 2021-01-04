import React from "react";
import Slider from "react-slick";

export default function ListFavorit() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <h1>Listagem musicas favoritas</h1>
    </div>
  );
}
