"use client"
import React, { useRef, useEffect } from 'react';
import Plyr from 'plyr';
import "plyr/dist/plyr.css";

const Player = ({ videoSrc, videoType }) => {
  const videoRef = useRef();

  useEffect(() => {
    if(!videoRef.current) return;

    // const playerInstance = new Plyr(videoRef.current);
    // console.log('playerInstance: ', playerInstance);
    
    //换成getElementById后就可以了，nextjs的渲染问题。reactjs中是可以的，用ref或者id都行
    const playerInstance1 = new Plyr(document.getElementById('palyerid'));
    console.log('playerInstance1: ', playerInstance1);

    return () => {
      playerInstance.destroy();
    }
  }, []);

  return (
    <video id="palyerid" ref={videoRef} controls playsInline>
      {/* <source src={videoSrc} type={videoType || 'video/mp4'} /> */}
      <source src="/1.mp4" type={videoType || 'video/mp4'} />
    </video>
  );
}

export default Player;