import { useState } from "react";

function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>;
}

function HomePage() {
  const names = ["Alice", "David", "Ksusha"];
  const { likes, setLikes } = useState(0);

  function handleClick(e) {
    setLikes((l) => l + 1);
  }

  return (
    <div>
      <Header title="Develop. Preview. Ship."></Header>
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Likes({likes})</button>
    </div>
  );
}
