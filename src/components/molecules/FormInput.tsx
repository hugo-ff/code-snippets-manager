import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface BaseProps {
  isTextArea?: boolean;
  type?: string;
  label: string;
  id: string;
  [x: string]: any;
}

type FormInputProps = BaseProps &
  (
    | InputHTMLAttributes<HTMLInputElement>
    | TextareaHTMLAttributes<HTMLTextAreaElement>
  );

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
          {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          name={id}
          id={id}
          type={type}
          className="border rounded p-2 w-full"
          {...(props as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
    </div>
  );
}
