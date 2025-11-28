interface ClickButtonProps {
  onUpdate: () => void;
}

function ClickButton({ onUpdate }: ClickButtonProps) {
  return <button onClick={onUpdate}> Click </button>;
}

export default ClickButton;
