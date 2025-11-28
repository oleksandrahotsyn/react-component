import CatInfo from "./Components/CatInfo/CatInfo";
import cats from "./cats.json";

function App() {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Click", event);
  };
  return (
    <div>
      {cats.map((cat) => (
        <CatInfo
          key={cat.id}
          name={cat.name}
          age={cat.age}
          image={cat.image}
          aviable={cat.aviable}
        />
      ))}
      <button onClick={handleClick}> click</button>
    </div>
  );
}

export default App;
