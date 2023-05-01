import React from "react";
import "./YourBotArmy.css";

function YourBotArmy(props) {
  return (
    <div id="container">
      {props.bots.map((bot) => (
        <div id="YourBotArmy" key={bot.id}>
          <img src={bot.avatar_url} alt={bot.name} />
          <p id="yname">{bot.name}</p>
          <p>{bot.bot_class}</p>
          <p>damage:{bot.damage}</p>
          <p>health:{bot.health}</p>
          <p>armor:{bot.armor}</p>
        </div>
      ))}
    </div>
  );
}

export default YourBotArmy;
