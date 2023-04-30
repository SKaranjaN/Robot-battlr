import React, { useEffect, useState } from "react";
import BotCard from "./BotCard";

function BotCollection() {
  const [bot, setBot] = useState([]);
  console.log(bot);
  function fetchData() {
    fetch("http://localhost:3000/bots")
      .then((response) => response.json())
      .then((data) => setBot(data));
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>This is the army</h1>
      <p>
        {bot.map((bot) => (
          <BotCard
            key={bot.id}
            src={bot.avatar_url}
            alt={bot.name}
            name={bot.name}
            clss={bot.bot_class}
            health={bot.health}
            damage={bot.damage}
            armor={bot.armor}
            catchphrase={bot.catchphrase}
          />
        ))}
      </p>
    </div>
  );
}

export default BotCollection;
