import React from "react";
import "./BotCard.css";

function BotCard(props) {
  const { src, alt, name, clss, health, damage, armor, catchphrase } = props;

  function handleClick() {
    console.log("I have  been clicked");
  }
  return (
    <div id="card" onClick={handleClick}>
      <img src={src} alt={alt} />
      <p id="nameCard">{name}</p>
      <p>{clss}</p>
      <p>damage:{damage}</p>
      <p>health:{health}</p>
      <p>armor:{armor}</p>
      <p>{catchphrase}</p>
    </div>
  );
}

export default BotCard;
