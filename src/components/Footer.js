import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Player } from "./Player/Player";

import { Top } from "./Player/Top";
import { fetchPlaylist, PlaylistContext } from "../store/playlist";

const Footer = styled.footer`
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  background-color: #2d7ab;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  text-align: center;
  .drawer-button {
    position: absolute;
    right: 14px;
    color: blue;
    cursor: pointer;
    top: 12px;
  }

  .drawer {
    position: fixed;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    background: #fff;
    color: white;
    z-index: 1000;

    opacity: 0;
    transform: translateY(100%);
    transition: 0.5s ease;
  }

  .drawer-toggler:checked + .drawer {
    opacity: 1;
    transform: translateY(0);
  }
`;
const Container = styled.div`
  position: relative;
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.75);
`;

const Loading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Footers = () => {
  const [playlist, setPlaylist] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(0);

  const handleNextTrack = () => {
    if (currentTrack === playlist.length - 1) {
      setCurrentTrack(0);
      return;
    }
    setCurrentTrack(currentTrack + 1);
  };

  const handlePrevTrack = () => {
    if (currentTrack === 0) {
      setCurrentTrack(playlist.length - 1);
      return;
    }
    setCurrentTrack(currentTrack - 1);
  };

  const handleFetchData = async () => {
    const playlist = await fetchPlaylist();
    setPlaylist(playlist);
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  if (playlist.length === 0) {
    return (
      <Container>
        <Loading>loading...</Loading>
      </Container>
    );
  }
  return (
    <Footer>
      <label class="drawer-button" for="drawer-01">
        open
      </label>

      <div>
        <PlaylistContext.Provider value={{ handleNextTrack, handlePrevTrack }}>
          <Top track={playlist[currentTrack]} />
        </PlaylistContext.Provider>
      </div>

      <input id="drawer-01" class="drawer-toggler" type="checkbox" hidden />
      <div class="drawer">
        <div class="wrapper">
          <Player />
          <label class="drawer-button" for="drawer-01">
            <img
              src="/img/modal-close.png"
              alt="close"
              width="20px"
              height="20px"
            />
          </label>
        </div>
      </div>
    </Footer>
  );
};
export default Footers;
