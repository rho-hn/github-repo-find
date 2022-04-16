import React from "react";

function Card({
  name,
  description,
  ownerName,
  starsCount,
  forks,
  language,
  githubClick,
}) {
  function clicked() {
    window.open(githubClick);
  }
  return (
    <div>
      <div onClick={clicked} className="card">
        <div className="top">
          <h2>Repository Name:{name}</h2>
        </div>
        <div className="bottom">
          <p>Description: {description}</p>
          <p>Owner: {ownerName}</p>
          <p>Stars: {starsCount}</p>
          <p>No. of Forks:{forks}</p>
          <p>language:{language}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
