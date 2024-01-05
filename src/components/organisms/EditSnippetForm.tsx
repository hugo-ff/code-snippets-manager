"use client";

import Editor from "@monaco-editor/react";

import { useState } from "react";

import { Button } from "../atoms/Button";
import { updateSnippet } from "@/actions/db-prisma-actions";
import { Snippet } from "@prisma/client";

interface EditSnippetFormProps {
  snippet: Snippet;
}

export function EditSnippetForm({ snippet }: Readonly<EditSnippetFormProps>) {
  const [code, setCode] = useState(snippet.code);

  const handleChange = (value: string = "") => {
    setCode(value);
  };

  const editSnippetAction = updateSnippet.bind(null, snippet.id, code);

  return (
    <div>
      <Editor
        height="40vh"
        theme="vs-dark"
        language="typescript"
        defaultValue={snippet.code}
        options={{
          minimap: { enabled: false },
        }}
        onChange={handleChange}
      />
      <form action={editSnippetAction}>
        <Button btnText="Save" type="submit" secondary />
      </form>
    </div>
  );
}
