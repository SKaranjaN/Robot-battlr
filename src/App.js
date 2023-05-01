import React, { useState } from "react";
import "./App.css";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";

function App() {
  const [selectedBots, setSelectedBots] = useState([]);

  function addBotToArmy(bot) {
    setSelectedBots([...selectedBots, bot]);
  }

  return (
    <div className="App">
      <YourBotArmy bots={selectedBots} />
      <BotCollection onBotClick={addBotToArmy} />
    </div>
  );
}

export default App;
