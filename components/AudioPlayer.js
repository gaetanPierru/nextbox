import React from 'react'
import Style from '../styles/AudioPlayer.module.css'

export default function AudioPlayer({music, setPlay}) {
  return (
    <>
        <audio src={`assets/musics/${music}`} controls className={Style.audio} onPause={() => setPlay(false)} onPlay={() => setPlay(true)} autoPlay></audio>
    </>
  )
}
