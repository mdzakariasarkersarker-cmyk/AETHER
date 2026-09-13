const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.XAI_API_KEY,
  baseURL: "https://api.x.ai/v1"
});

async function test() {
  try {
    const response = await client.responses.create({
      model: "grok-4",
      input: "What is the latest news about Bangladesh today?",
      tools: [{ type: "web_search" }]
    });

    console.log(response.output_text);
  } catch (error) {
    console.error("XAI WEB SEARCH ERROR:", error.message);
  }
}

test();
