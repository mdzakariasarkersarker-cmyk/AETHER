const fs = require("fs");
const path = require("path");

const knowledgeFile = path.join(__dirname, "knowledge", "knowledge.json");

function loadKnowledge() {
  try {
    return JSON.parse(fs.readFileSync(knowledgeFile, "utf8"));
  } catch {
    return [];
  }
}

function searchKnowledge(question) {
  const knowledge = loadKnowledge();
  const q = question.toLowerCase();

  const matches = knowledge.filter(item =>
    item.keywords?.some(keyword =>
      q.includes(keyword.toLowerCase())
    )
  );

  if (matches.length === 0) return null;

  return matches.map(item => item.answer).join("\n\n");
}

module.exports = { searchKnowledge };
