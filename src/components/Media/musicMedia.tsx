"use client";

import React, { FC, useState } from "react";
import Image from "next/image";
import { lofiSound } from "@/lib/utils/static";
import { SVGIcons } from "@/lib/assets";
import Slider from "../Slider";
import { Progress } from "../ui/progress";
import Button from "../Button";
import { useMusicContext } from "@/store/music";

type Track = {
  title: string;
  audioSrc: string;
  image: string;
};

type MusicMediaProps = {
  tracks?: Track[];
};

const MusicMedia: FC<MusicMediaProps> = ({ tracks = lofiSound }) => {
  const {
    currentTrackIndex,
    isPlaying,
    volume,
    progress,
    error,
    play,
    pause,
    next,
    prev,
    setTrack,
    setVolume,
  } = useMusicContext();

  const [hovered, setHovered] = useState<string>("");

  const {
    PlayIcon,
    NextIcon,
    PauseIcon,
    playCircle,
    pauseCircle,
    PreviousIcon,
  } = SVGIcons;

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      action();
    }
  };

  return (
    <div className="app_timer_main_media_music_player mb-4">
      {error && (
        <div className="audio-error-message" role="alert">
          {error}
        </div>
      )}

      <div className="app_timer_main_media_music_player_media_groups">
        {tracks.map((track, index) => {
          const isActive = index === currentTrackIndex && isPlaying;

          return (
            <div
              key={track.title}
              onMouseEnter={() => setHovered(track.title)}
              onMouseLeave={() => setHovered("")}
              className={`item ${isActive ? "active" : ""}`}
              style={{ backgroundImage: `url(${track.image})` }}
              onClick={() => setTrack(index)}
              onKeyDown={(e) => handleKeyDown(e, () => setTrack(index))}
              tabIndex={0}
              role="button"
              aria-label={`Play ${track.title}`}
              aria-pressed={isActive}
            >
              <p>{track.title}</p>
              {isActive && (
                <Image
                  className="image-over"
                  src={pauseCircle}
                  alt="Pause"
                  onClick={(e) => {
                    e.stopPropagation();
                    pause();
                  }}
                />
              )}

              {hovered === track.title && !isActive && (
                <Image
                  className="image-over"
                  src={playCircle}
                  alt="Play"
                  onClick={(e) => {
                    e.stopPropagation();
                    setTrack(index);
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

      <div className="flex flex-col justify-center gap-4">
        <div className="app_timer_main_media_music_player_media_controls">
          <Button
            variant="ghost"
            className="control-button"
            onClick={prev}
            disabled={currentTrackIndex <= 0}
            aria-label="Previous track"
            icon={PreviousIcon}
          />

          {isPlaying ? (
            <Button
              size="icon"
              variant="ghost"
              aria-label="Pause"
              className="control-button"
              onClick={pause}
              icon={PauseIcon}
            />
          ) : (
            <Button
              size="icon"
              variant="ghost"
              aria-label="Play"
              className="control-button"
              onClick={play}
              icon={PlayIcon}
            />
          )}
          <Button
            size="icon"
            variant="ghost"
            iconDimension="2rem"
            aria-label="Next track"
            className="control-button"
            onClick={next}
            disabled={currentTrackIndex >= tracks.length - 1}
            icon={NextIcon}
          />
          <Slider
            step={1}
            max={100}
            value={volume}
            defaultValue={[90]}
            aria-labelledby="volume-label"
            onValueChange={(value: number[]) => {
              setVolume(value);
            }}
          />
        </div>
        <Progress value={progress} className="w-full" />
      </div>
    </div>
  );
};

export default MusicMedia;
