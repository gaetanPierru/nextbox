import React from 'react'
import Style from '../styles/AudioPlayer.module.css'

export default function AudioPlayer(music) {
  return (
    <>
        <audio src={`assets/musics/${music.music}`} controls className={Style.audio} autoplay></audio>
    </>
  )
}
