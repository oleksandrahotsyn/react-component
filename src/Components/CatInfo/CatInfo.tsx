import css from "./CatInfo.module.css";

interface CatInfoProps {
  readonly name: string;
  readonly age: number;
  readonly image: string;
  readonly aviable: boolean;
}

function CatInfo({ name, age, image, aviable }: CatInfoProps) {
  return (
    <div className={css.card}>
      <img className={css.image} src={image} alt={name} />
      <h3 className={css.name}>{name}</h3>
      <p className={css.age}>
        Age: <strong>{age}</strong>{" "}
      </p>
      <p
        className={`${css.status} ${
          aviable ? css.available : css.notAvailable
        }`}
      >
        Aviable: {aviable ? "YES" : "No"}
      </p>
    </div>
  );
}

export default CatInfo;
