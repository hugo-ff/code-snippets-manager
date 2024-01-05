"use server";

import { redirect } from "next/navigation";
import { db } from "@/db";

import { Snippet } from "@prisma/client";

export async function createSnippet(
  formState: { message: string },
  formData: FormData
): Promise<{ message: string }> {
  try {
    const title = formData.get("title");
    const code = formData.get("code");

    if (typeof title !== "string" || title.length < 3) {
      return {
        message: "Title must be longer",
      };
    }

    if (typeof code !== "string" || code.length < 10) {
      return {
        message: "Code must be longer",
      };
    }

    await db.snippet.create({
      data: {
        title,
        code,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        message: err.message,
      };
    } else {
      return {
        message: "Something went wrong...",
      };
    }
  }

  redirect("/");
}

export async function getAllSnippets(): Promise<Snippet[]> {
  const snippets: Snippet[] = await db.snippet.findMany();
  return snippets;
}

export async function getSnippetById(id: string): Promise<Snippet | null> {
  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(id) },
  });
  return snippet;
}

export async function updateSnippet(id: number, code: string): Promise<void> {
  await db.snippet.update({
    where: { id },
    data: { code },
  });

  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number): Promise<void> {
  await db.snippet.delete({
    where: { id },
  });

  redirect("/");
}
