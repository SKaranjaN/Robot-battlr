import React from "react";
import "./BotCard.css";

function BotCard(props) {
  const { src, alt, name, clss, health, damage, armor, catchphrase } = props;
  return (
    <div id="card">
      <img src={src} alt={alt} />
      <p>{name}</p>
      <p>{clss}</p>
      <p>damage:{damage}</p>
      <p>health:{health}</p>
      <p>armor:{armor}</p>
      <p>{catchphrase}</p>
    </div>
  );
}

export default BotCard;
