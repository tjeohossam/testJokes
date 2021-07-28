import React from "react";

const Joke = ({ joke }) => {
  return (
    <div className="card">
      <h4>{joke.setup}</h4>
      <p>Answer : {joke.punchline}</p>
      <p>Type :{joke.type}</p>
    </div>
  );
};

export default Joke;
