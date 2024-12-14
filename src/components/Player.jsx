import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    // setIsEditing(!isEditing); //this is not best way  to update old state
    setIsEditing((editing) => !editing); //this is best way  to update old state
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
    console.log(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  //   let btnCaption = "Edit";

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    // btnCaption = "Save";
  }

  return (
    <li>
      {editablePlayerName}
      <span className="player-info">
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
