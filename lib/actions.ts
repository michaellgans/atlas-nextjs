// Define your server actions here
// Task 4 Update

"use server";

import { revalidatePath } from "next/cache";
import { insertTopic } from "./data";
import { insertQuestion } from "./data";
import { redirect } from "next/navigation";

export async function addTopic(data: FormData) {
  let topic;
  try {
    topic = await insertTopic({
      title: data.get("title") as string,
    });
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to add topic.");
  } finally {
    revalidatePath("/ui/topics/[id]", "page");
    topic && redirect(`/ui/topics/${topic.id}`);
  }
}

export async function addQuestion(question: FormData) {
    try {
      insertQuestion({
        title: question.get("title") as string,
        topic_id: question.get("topic_id") as string,
        votes: 0,
      });
      revalidatePath("/ui/topics/[id]", "page");
    } catch (error) {
      console.error("Database Error:", error);
      throw new Error("Failed to add question.");
    }
  }
