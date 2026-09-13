require("dotenv").config();
const express = require("express");
const { GoogleGenAI } = require("@google/genai");

const app = express();
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  next();
});

app.post("/solve", async (req, res) => {
  try {
    const problem = req.body.problem;

    if (!problem) {
      return res.status(400).json({ error: "Please enter a math problem." });
    }

    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents:
        "You are Dragon Math AI. Solve the following mathematics problem accurately. Give a clear step-by-step solution and the final answer:\n\n" +
        problem
    });

    res.json({ answer: result.text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(3001, () => {
  console.log("Dragon AI Server running on port 3001");
});
