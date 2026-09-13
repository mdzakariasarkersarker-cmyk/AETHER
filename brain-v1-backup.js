function detectBrain(question) {
  const q = question.toLowerCase();

  if (/solve|equation|calculate|math|যোগ|বিয়োগ|গুণ|ভাগ|সমীকরণ|ত্রিভুজ|বৃত্ত/.test(q)) {
  if (/[!]|sin|cos|tan|log|ln|sqrt|√|^|²/.test(q)) return "math";
    return "math";
  }

  if (/ssc|class 10|পদার্থ|রসায়ন|বাংলা|ইংরেজি|chapter|অধ্যায়/.test(q)) {
    return "ssc";
  }

  if (/why|কেন|যুক্তি|logic|reason|কারণ|explain/.test(q)) {
    return "reasoning";
  }

  if (/image|photo|ছবি|চিত্র|camera/.test(q)) {
    return "vision";
  }

  return "chat";
}

module.exports = { detectBrain };

function solveMath(question) {
  const q = question.trim();

  if (/^[0-9+*/().% -]+$/.test(q)) {
    try {
      const answer = Function('"use strict"; return (' + q + ')')();
      if (Number.isFinite(answer)) return String(answer);
    } catch (e) {}
  }

  const percent = q.match(/^([0-9.]+)%\s+of\s+([0-9.]+)$/i);
  if (percent) {
    return String((Number(percent[1]) / 100) * Number(percent[2]));
  }

  return null;
}

module.exports.solveMath = solveMath;

function solvePercentage(question) {
  const q = question.trim();

  let m = q.match(/^([0-9.]+)%\s+of\s+([0-9.]+)$/i);
  if (m) return String((Number(m[1]) / 100) * Number(m[2]));

  m = q.match(/^([0-9.]+)\s*percent\s+of\s+([0-9.]+)$/i);
  if (m) return String((Number(m[1]) / 100) * Number(m[2]));

  m = q.match(/^([0-9.]+)\s*এর\s*([0-9.]+)%$/);
  if (m) return String((Number(m[2]) / 100) * Number(m[1]));

  return null;
}

module.exports.solvePercentage = solvePercentage;

function solveAdvancedCalculator(question) {
  let q = question.trim().toLowerCase();
  q = q.replace(/×/g, "*").replace(/÷/g, "/").replace(/−/g, "-");
  q = q.replace(/√\s*([0-9.]+)/g, "sqrt($1)");
  q = q.replace(/²/g, "^2");

  try {
    const math = require("mathjs");
    q = q.replace(/π/g, "pi").replace(/°/g, " deg"); q = q.replace(/sin\(([^)]+) deg\)/g, "sin(($1)*pi/180)").replace(/cos\(([^)]+) deg\)/g, "cos(($1)*pi/180)").replace(/tan\(([^)]+) deg\)/g, "tan(($1)*pi/180)"); const result = math.evaluate(q);
    if (typeof result === "number" && Number.isFinite(result)) return String(Number(result.toPrecision(12)));
  } catch (e) {}

  return null;
}

module.exports.solveAdvancedCalculator = solveAdvancedCalculator;
