import { useState } from "react";
import CatInfo from "./Components/CatInfo/CatInfo";
import cats from "./cats.json";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <div> Total {count}</div>
      <button onClick={handleClick}> click</button>
      <button onClick={handleClick}> click</button>
      {cats.map((cat) => (
        <CatInfo
          key={cat.id}
          name={cat.name}
          age={cat.age}
          image={cat.image}
          aviable={cat.aviable}
        />
      ))}
    </div>
  );
}

export default App;
