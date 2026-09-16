function chatReply(question) {
  const q = question.trim().toLowerCase();

  if (/^(hi|hello|hey|হাই|হ্যালো|হেই)\b/.test(q)) {
    return "Hey! 👋 আমি AQLYVEN AI ⚡ কেমন আছো?";
  }

  if (/how are you|কেমন আছ|কেমন আছো/.test(q)) {
    return "আমি দারুণ আছি! 😄 তোমার সাথে গল্প করতে প্রস্তুত।";
  }

  if (/your name|তোমার নাম|নাম কী/.test(q)) {
    return "আমার নাম AQLYVEN AI 🐉";
  }

  if (/what can you do|কি করতে পার|কী করতে পার|তুমি কী করতে পার/.test(q)) {
    return "আমি Math solve করতে পারি, equation বুঝতে পারি, প্রশ্নের উত্তর দিতে পারি এবং তোমার সাথে গল্পও করতে পারি। 🧠🐉";
  }

  if (/thank you|thanks|ধন্যবাদ/.test(q)) {
    return "You're welcome! 😄🐉";
  }

  if (/good morning|শুভ সকাল/.test(q)) {
    return "Good morning! ☀️ আজকের দিনটা দারুণ হোক!";
  }

  return null;
}

module.exports = { chatReply };
