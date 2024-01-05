import { Snippet } from "@prisma/client";
import { SnippetsList } from "@/components/organisms/SnippetsList";
import { getAllSnippets } from "@/actions/db-prisma-actions";

export default async function Home() {
  const snippets: Snippet[] = await getAllSnippets();

  return <SnippetsList snippets={snippets} />;
}
