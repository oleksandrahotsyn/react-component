interface CatInfoProps {
  readonly name: string;
  readonly age: number;
  readonly image: string;
  readonly aviable: boolean;
}

function CatInfo({ name, age, image, aviable }: CatInfoProps) {
  return (
    <div>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>
        Age: <strong>{age}</strong>{" "}
      </p>
      <p>Aviable: {aviable ? "YES" : "No"}</p>
    </div>
  );
}

export default CatInfo;
