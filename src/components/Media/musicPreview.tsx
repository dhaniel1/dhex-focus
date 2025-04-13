"use client";

import React, { FC, useEffect, useState } from "react";

import { lofiSound } from "@/lib/utils/static";
import { SVGIcons } from "@/lib/assets";
import Slider from "../Slider";
import { Progress } from "../ui/progress";
import Button from "../Button";
import MusicMedia from "./musicMedia";
import Drawer from "../Drawer ";
import useMusicContext from "@/store/music/musicContext";

type Track = {
  title: string;
  audioSrc: string;
  image: string;
};

type MusicPreviewProps = {
  tracks?: Track[];
};

const MusicPreview: FC<MusicPreviewProps> = ({ tracks = lofiSound }) => {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setContainer(document.getElementById("app_timer")!);
  }, []);

  const {
    currentTrackIndex,
    currentTrack,
    isPlaying,
    volume,
    progress,
    error,
    play,
    pause,
    next,
    prev,
    setVolume,
  } = useMusicContext();

  const displayCurrentTrack = currentTrack || lofiSound[0];

  const { PlayIcon, NextIcon, PauseIcon, PreviousIcon, ExpandIcon } = SVGIcons;

  return (
    <div className="app_timer_main_media_music_player shadow-xl mb-1 ">
      {error && (
        <div className="audio-error-message" role="alert">
          {error}
        </div>
      )}

      <div className="app_timer_main_media_music_player_media_groups">
        <div
          key={displayCurrentTrack.title}
          className="item preview"
          style={{ backgroundImage: `url(${displayCurrentTrack.image})` }}
          tabIndex={0}
          role="button"
          aria-label={`Play ${displayCurrentTrack.title}`}
        >
          <p>{displayCurrentTrack.title}</p>
        </div>
      </div>

      <div className="flex flex-col justify-center gap-4">
        <div className="app_timer_main_media_music_player_media_controls">
          <Button
            size="icon"
            variant="ghost"
            className="control-button"
            aria-label="Previous track"
            iconDimension="1.8rem"
            onClick={prev}
            icon={PreviousIcon}
            disabled={currentTrackIndex <= 0}
          />

          {isPlaying ? (
            <Button
              size="icon"
              variant="ghost"
              aria-label="Pause"
              className="control-button"
              iconDimension="1.4rem"
              onClick={pause}
              icon={PauseIcon}
            />
          ) : (
            <Button
              size="icon"
              variant="ghost"
              aria-label="Play"
              className="control-button"
              iconDimension="1.4rem"
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

      {container && (
        <Drawer
          title="Media Section"
          description="Select a sooting music for your tasks in progress"
          drawerContent={<MusicMedia tracks={lofiSound} />}
          enableFooter={false}
        >
          <Button
            variant="ghost"
            iconDimension="1.5rem"
            className="hidden md:inline"
            aria-label="Previous track"
            icon={ExpandIcon}
          />
        </Drawer>
      )}
    </div>
  );
};

export default MusicPreview;
