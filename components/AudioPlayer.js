import React from 'react'

export default function AudioPlayer(music) {
  console.log(music)
  return (
    <>
        <audio src={`assets/musics/${music.music.src}`} controls></audio>
    </>
  )
}
