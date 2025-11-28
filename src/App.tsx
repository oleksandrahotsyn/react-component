import ClickButton from "./Components/ClickButton/ClickButton";
import CatInfo from "./Components/CatInfo/CatInfo";
import cats from "./cats.json";
import { useState } from "react";
import CountDisplay from "./Components/CountDisplay/CountDisplay";
import TagManager from "./Components/TagManager/TagManager";

function App() {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <TagManager />
      <ClickButton onUpdate={handleClick} />
      <ClickButton onUpdate={handleClick} />
      <CountDisplay count={count} />
      {cats.map((cat) => (
        <CatInfo
          key={cat.id}
          name={cat.name}
          age={cat.age}
          image={cat.image}
          aviable={cat.aviable}
        />
      ))}
    </>
  );
}

export default App;
