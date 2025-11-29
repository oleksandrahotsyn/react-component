import css from "./CountDisplay.module.css";

interface CountDisplayProps {
  count: number;
}

function CountDisplay({ count }: CountDisplayProps) {
  return <div className={css.wrapper}>Total count is {count}</div>;
}

export default CountDisplay;
