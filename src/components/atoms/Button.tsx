interface ButtonProps {
  type: "submit" | "reset";
  btnText: string;
  secondary?: boolean;
}

export function Button({
  type,
  btnText,
  secondary = false,
}: Readonly<ButtonProps>) {
  return (
    <button
      type={type}
      className={`rounded p-2 ${!secondary ? "bg-blue-200" : "bg-transparent"}`}
    >
      {btnText}
    </button>
  );
}
