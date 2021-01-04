import React, { useState } from "react";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";

import { FavoriteButton } from "./styles";

export default function FavoritedButton() {
  const [favorited, setFavorited] = useState(false);

  function handleFavorited() {
    setFavorited(!favorited);
  }

  return (
    <FavoriteButton onClick={() => handleFavorited()}>
      {favorited ? (
        <AiTwotoneHeart size={20} fill="#95d7d3" />
      ) : (
        <AiOutlineHeart size={20} fill="#95d7d3" />
      )}
    </FavoriteButton>
  );
}
