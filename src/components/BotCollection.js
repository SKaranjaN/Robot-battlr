import React, { useEffect, useState } from "react";
import BotCard from "./BotCard";
import "./BotCollection.css";

function BotCollection(props) {
  const [bots, setBots] = useState([]);
  console.log(bots);

  function fetchData() {
    fetch("http://localhost:3000/bots")
      .then((response) => response.json())
      .then((data) => setBots(data));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const groupSize = 4;
  const groups = bots
    .map((_, i) => (i % groupSize === 0 ? bots.slice(i, i + groupSize) : null))
    .filter((group) => group);

  return (
    <div>
      {groups.map((group, i) => (
        <div key={i} style={{ display: "flex" }}>
          {group.map((bot) => (
            <BotCard key={bot.id} bot={bot} onBotClick={props.onBotClick} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default BotCollection;
