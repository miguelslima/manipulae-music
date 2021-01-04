import React, { useState, useCallback } from "react";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { favoriteTrackApi } from "../../store/modules/album/actions";

import { FavoriteButton } from "./styles";

export default function FavoritedButton({ favoriteTrack }) {
  const [favorited, setFavorited] = useState(false);

  const dispatch = useDispatch();

  const handleFavoritedTrack = useCallback(
    (album, favorited) => {
      dispatch(favoriteTrackApi(album, favorited));
      setFavorited(!favorited);
      // console.log("clicou em " + album.title);
    },
    [dispatch]
  );

  function handleFavorited() {
    setFavorited(!favorited);
  }

  return (
    <FavoriteButton
      onClick={() => handleFavoritedTrack(favoriteTrack, favorited)}
    >
      {favorited ? (
        <AiTwotoneHeart size={20} fill="#95d7d3" />
      ) : (
        <AiOutlineHeart size={20} fill="#95d7d3" />
      )}
    </FavoriteButton>
  );
}
