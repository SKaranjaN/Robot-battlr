import React, { useEffect, useState } from "react";
import BotCard from "./BotCard";
import "./BotCollection.css";

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

  const groupSize = 4;
  const groups = bot
    .map((_, i) => (i % groupSize === 0 ? bot.slice(i, i + groupSize) : null))
    .filter((group) => group);

  return (
    <div>
      {groups.map((group, i) => (
        <div key={i} style={{ display: "flex" }}>
          {group.map((bot) => (
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
        </div>
      ))}
    </div>
  );
}
export default BotCollection;
