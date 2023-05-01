import React from "react";
import "./BotCard.css";

function BotCard(props) {
  const { bot, onBotClick } = props;

  function handleClick() {
    onBotClick(bot);
  }

  function handleDeleteClick() {
    fetch(`http://localhost:3000/bots/${bot.id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <div id="card" onClick={handleClick}>
      <img src={bot.avatar_url} alt={bot.name} />
      <p id="nameCard">{bot.name}</p>
      <p>{bot.bot_class}</p>
      <p>damage:{bot.damage}</p>
      <p>health:{bot.health}</p>
      <p>armor:{bot.armor}</p>
      <p id="cp">{bot.catchphrase}</p>
      <button className="delete-button" onClick={handleDeleteClick}>
        X
      </button>
    </div>
  );
}

export default BotCard;
