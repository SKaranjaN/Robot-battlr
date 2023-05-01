import React from "react";

function YourBotArmy(props) {
  return (
    <div
      className="YourBotArmy"
      style={{
        border: "solid 1px grey",
        height: "550px",
        backgroundColor: "#b0e400",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
    >
      {props.bots.map((bot) => (
        <div key={bot.id}>
          <img src={bot.avatar_url} alt={bot.name} />
          <p>{bot.name}</p>
        </div>
      ))}
    </div>
  );
}

export default YourBotArmy;
