import CatInfo from "./Components/CatInfo/CatInfo";
import cats from "./cats.json";

function App() {
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
    </div>
  );
}

export default App;
