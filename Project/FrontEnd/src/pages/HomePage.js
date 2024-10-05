
import './HomePage.css';
import { useState } from 'react';
import { LinkContainer } from "react-router-bootstrap";

export default function HomePage() {
 

 return (
  <div className="center no-scroll-bar">
      <div
        className="background"
        style={{
          backgroundImage: `url('https://img.freepik.com/premium-photo/nighttime-soccer-football-field-with-empty-space-text_908985-23655.jpg')`,
        }}
      >
        <div className="overlay">
          <h1 className="football-page-text">FOOTBALL</h1>
          <h1 className="heritage-text">HERITAGE</h1>
        </div>
        <LinkContainer to={"/players"} >
        <img
          className="football-player"
          src="https://www.footyrenders.com/render/jude-bellingham-32.png"
          alt="Football Player"
        />
        </LinkContainer>
        <div className="bottom-left">
          <p className="welcome-text">WELCOME</p>
          <p className="final-project-text">FINAL PROJECT</p>
        </div>
      </div>
    </div>
 );
}
