import { CreateSnippetForm } from "@/components/organisms/CreateSnippetForm";
import { createSnippet } from "@/actions/db-prisma-actions";

export default function SnippetCreatePage() {
  return (
    <>
      <div>Create a Snippet!</div>
      <CreateSnippetForm onSubmit={createSnippet} />
    </>
  );
}
