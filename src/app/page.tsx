import { db } from "@/db";
import { Snippet } from "@prisma/client";
import { SnippetsList } from "@/components/organisms/SnippetsList";

export default async function Home() {
  const snippets: Snippet[] = await db.snippet.findMany();

  return <SnippetsList snippets={snippets} />;
}
