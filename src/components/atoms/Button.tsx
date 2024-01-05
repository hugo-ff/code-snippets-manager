interface ButtonProps {
  type: "submit" | "reset";
  btnText: string;
  secondary?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export function Button({
  type,
  btnText,
  onClick,
  secondary = false,
  disabled = false,
}: Readonly<ButtonProps>) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`rounded p-2 ${!secondary ? "bg-blue-200" : "bg-transparent"}`}
    >
      {btnText}
    </button>
  );
}
