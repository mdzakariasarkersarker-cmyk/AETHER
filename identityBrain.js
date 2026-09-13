function identityReply(question) {
  const q = question.trim().toLowerCase();

  if (/who are you|তুমি কে|তোমার পরিচয়/.test(q)) {
    return "আমি Dragon Math AI 🐉 — তোমার intelligent mathematics workspace.";
  }

  if (/who created you|who made you|কে বানিয়েছে|কে তৈরি করেছে|creator/.test(q)) {
    return "আমাকে আমার creator তৈরি করেছেন। 👨‍💻🐉";
  }

  if (/help|সাহায্য|হেল্প|support/.test(q)) {
    return "🆘 Dragon Help Line: 01861999585";
  }

  if (/what can you do|কি করতে পার|কী করতে পার/.test(q)) {
    return "আমি Math, equation, study, reasoning এবং আরও অনেক কাজে সাহায্য করতে পারি। 🧠🐉";
  }

  return null;
}

module.exports = { identityReply };
