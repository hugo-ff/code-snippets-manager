import { Snippet } from "@prisma/client";
import Link from "next/link";
import ListItem from "../molecules/ListItem";

interface SnippetsListProps {
  snippets: Snippet[];
}

export function SnippetsList({ snippets }: Readonly<SnippetsListProps>) {
  const snippetsList = snippets.map((snippet: Snippet) => {
    return (
      <ListItem
        href={`/snippets/${snippet.id}`}
        leftText={snippet.title}
        rightText="View"
        key={snippet.id}
      />
    );
  });

  return (
    <>
      <div className="flex m-2 justify-between items-center">
        <h1 className="text-xl font-bold">Snippets</h1>
        <Link href="snippets/new" className="border p-2 rounded">
          New
        </Link>
      </div>
      <div className="flex flex-col gap-2">{snippetsList}</div>
    </>
  );
}
