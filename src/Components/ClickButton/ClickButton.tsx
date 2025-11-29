import css from "./ClickButton.module.css";

interface ClickButtonProps {
  onUpdate: () => void;
}

function ClickButton({ onUpdate }: ClickButtonProps) {
  return (
    <button className={css.button} onClick={onUpdate}>
      Click
    </button>
  );
}

export default ClickButton;
