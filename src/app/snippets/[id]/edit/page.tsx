import { notFound } from "next/navigation";
import { EditSnippetForm } from "@/components/organisms/EditSnippetForm";
import { getSnippetById } from "@/actions/db-prisma-actions";

interface SnippetEditPage {
  params: {
    id: string;
  };
}

export default async function SnippetEditPage(
  props: Readonly<SnippetEditPage>
) {
  const snippet = await getSnippetById(props.params.id);

  if (!snippet) {
    return notFound();
  }

  return <EditSnippetForm snippet={snippet} />;
}
