import React, { useState, useEffect } from "react";
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from "react-icons/ai";

const PlayMusicPreview = ({ musicPreview }) => {
  const [audio] = useState(new Audio(musicPreview));
  const [playing, setPlaying] = useState(false);

  function handlePlay() {
    setPlaying(!playing);
  }

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [audio, playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  });

  return (
    <button onClick={handlePlay}>
      {playing ? (
        <AiOutlinePauseCircle size={22} fill="#95d7d3" />
      ) : (
        <AiOutlinePlayCircle size={22} fill="#95d7d3" />
      )}
    </button>
  );
};

export default PlayMusicPreview;
