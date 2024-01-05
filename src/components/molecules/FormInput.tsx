interface FormInputProps {
  isTextArea?: boolean;
  type?: string;
  label: string;
  id: string;
  [x: string]: any;
}

export function FormInput({
  isTextArea = false,
  type = "text",
  label,
  id,
  ...props
}: Readonly<FormInputProps>) {
  return (
    <div className="flex gap-4">
      <label className="w-12" htmlFor={id}>
        {label}
      </label>
      {isTextArea ? (
        <textarea
          name={id}
          id={id}
          className="border rounded p-2 w-full"
          {...props}
        />
      ) : (
        <input
          name={id}
          id={id}
          className="border rounded p-2 w-full"
          {...props}
        />
      )}
    </div>
  );
}
