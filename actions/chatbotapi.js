"use server";
import OpenAI from "openai";

const token = process.env["GITHUB_TOKEN"];
const endpoint = "https://models.inference.ai.azure.com";
const modelName = "gpt-4o";
const client = new OpenAI({ baseURL: endpoint, apiKey: token });
export async function handleChatRequest({ message, title }) {
  const prompt = `I'm reading ${title} . ${message}`;
  const response = await client.chat.completions.create({
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: `${prompt}` },
    ],
    temperature: 1.0,
    top_p: 1.0,
    max_tokens: 1000,
    model: modelName,
  });

  return response.choices[0].message.content;
}

handleChatRequest().catch((err) => {
  console.error("The sample encountered an error:", err);
});
