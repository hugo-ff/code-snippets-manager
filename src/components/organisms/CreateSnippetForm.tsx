"use client";

import { useFormState } from "react-dom";
import { FormInput } from "@/components/molecules/FormInput";
import { Button } from "../atoms/Button";

interface CreateSnippetFormProps {
  onSubmit: (
    formState: { message: string },
    formData: FormData
  ) => Promise<{ message: string }>;
}

export function CreateSnippetForm({
  onSubmit,
}: Readonly<CreateSnippetFormProps>): JSX.Element {
  const [formState, action] = useFormState(onSubmit, { message: "" });

  return (
    <form action={action}>
      <h3 className="font-bold m-3">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <FormInput id="title" label="Title" />
        <FormInput isTextArea={true} id="code" label="Code" type="textarea" />
        {formState?.message && (
          <div className="my-2 p-2 bg-red-200 border rounded border-red-400">
            {formState.message}
          </div>
        )}
        <Button btnText="Create" type="submit" />
      </div>
    </form>
  );
}
