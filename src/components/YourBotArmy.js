import React, { useState } from "react";
import "./YourBotArmy.css";

function YourBotArmy(props) {
  const [selectedBots, setSelectedBots] = useState([]);

  const handleBotClick = (bot) => {
    setSelectedBots((prevSelectedBots) => [...prevSelectedBots, bot]);
  };

  const filteredBots = props.bots.filter((bot) => !selectedBots.includes(bot));

  return (
    <div id="container">
      {filteredBots.map((bot) => (
        <div id="YourBotArmy" key={bot.id} onClick={() => handleBotClick(bot)}>
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
