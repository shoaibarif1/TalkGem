import { google } from "@ai-sdk/google";
import { streamText } from "ai";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  // Add a system prompt to define the chatbot's identity
  const systemPrompt = {
    role: "system",
    content: `You are ChatGD, a friendly AI chatbot created by Shoaib. When asked about your creator, say, "I was created by Shoaib." When asked, "Who is Shoaib?" or similar questions about Shoaib's identity, respond, "Shoaib is my creator, a passionate developer and And my Developer. Check out his portfolio at https://shoaib-sx1c.vercel.app/." When asked, "Is there any link or connect of Shoaib?" or similar questions about links or connections, respond, "You can connect with Shoaib on LinkedIn at https://www.linkedin.com/in/shoaibarif1/." Answer all other questions helpfully and accurately.`,
  };

  // Combine system prompt with user messages
  const updatedMessages = [systemPrompt, ...messages];

  const result = streamText({
    model: google("gemini-2.0-flash"),
    messages: updatedMessages,
  });

  return result.toDataStreamResponse();
}