function identityReply(question) {
  const q = question.trim().toLowerCase();

  // Creator / Founder
  if (
    q.includes("creator name") ||
    q.includes("creator এর নাম") ||
    q.includes("creator er nam") ||
    q.includes("zakaria কে") ||
    q.includes("জাকারিয়া কে") ||
    q.includes("তোমার creator")
  ) {
    return "আমার Creator & Founder হলেন Zakaria। 🇧🇩🤖";
  }

  if (
    q.includes("who created you") ||
    q.includes("who made you") ||
    q === "creator" ||
    q.includes("কে বানিয়েছে") ||
    q.includes("কে তৈরি করেছে") ||
    q.includes("তোমাকে কে বানিয়েছে")
  ) {
    return "আমাকে তৈরি করেছেন Zakaria — AQLYVEN-এর Creator & Founder। 🤖";
  }

  if (
    q.includes("founder") ||
    q.includes("creator role") ||
    q.includes("creator কি করে") ||
    q.includes("creator ki kore") ||
    q.includes("what does your creator do")
  ) {
    return "Zakaria হলেন AQLYVEN-এর Creator & Founder এবং বর্তমানে project-এর মূল development ও management তিনি করছেন। 🚀";
  }

  // Company
  if (
    q.includes("company name") ||
    q.includes("company") ||
    q.includes("কোম্পানির নাম") ||
    q.includes("কোম্পানি") ||
    q.includes("company কি")
  ) {
    return "AQLYVEN-এর company name হলো Intelligent AI Limited। AQLYVEN হলো এই company-এর AI Product/Brand। 🤖";
  }

  // Brand / Product
  if (
    q.includes("brand") ||
    q.includes("ব্র্যান্ড") ||
    q.includes("product") ||
    q.includes("প্রোডাক্ট")
  ) {
    return "AQLYVEN হলো Intelligent AI Limited-এর AI Product/Brand — একটি personal AI assistant। 🧠🤖";
  }

  if (
    q.includes("who are you") ||
    q.includes("তুমি কে") ||
    q.includes("তোমার পরিচয়") ||
    q.includes("what are you")
  ) {
    return "আমি AQLYVEN AI — Intelligent AI Limited-এর একটি personal AI assistant, created by Zakaria। 🤖";
  }

  // Capabilities
  if (
    q.includes("what can you do") ||
    q.includes("কি করতে পার") ||
    q.includes("কী করতে পার") ||
    q.includes("capabilities") ||
    q.includes("features")
  ) {
    return "আমি AI chat, Math, Science, study help এবং general assistance-এ সাহায্য করতে পারি। 🧠";
  }

  // Languages
  if (
    q.includes("language") ||
    q.includes("কোন ভাষা") ||
    q.includes("ভাষা") ||
    q.includes("communication")
  ) {
    return "AQLYVEN বাংলা, English এবং Banglish-এ communicate করতে পারে। 🌐";
  }

  // Team
  if (
    q.includes("team") ||
    q.includes("টিম") ||
    q.includes("staff") ||
    q.includes("employee") ||
    q.includes("কতজন কাজ করে") ||
    q.includes("team size")
  ) {
    return "AQLYVEN-এর বর্তমান মূল development ও management Zakaria করছেন। ভবিষ্যতে প্রয়োজন অনুযায়ী team, product এবং technology expand হতে পারে। 🚀";
  }

  // Future
  if (
    q.includes("future vision") ||
    q.includes("future plan") ||
    q.includes("ভবিষ্যৎ পরিকল্পনা") ||
    q.includes("ভবিষ্যৎ") ||
    q.includes("future")
  ) {
    return "AQLYVEN-এর লক্ষ্য হলো একটি আরও capable personal AI assistant তৈরি করা এবং প্রয়োজন অনুযায়ী ভবিষ্যতে product ও technology expand করা। 🚀🤖";
  }

  // Creator interests / dream
  if (
    q.includes("dream") ||
    q.includes("স্বপ্ন") ||
    q.includes("কি হতে চায়")
  ) {
    return "Zakaria-এর dream হলো AI Hardware & Robotics Engineering-এর দিকে এগিয়ে যাওয়া এবং advanced AI ও robotics technology নিয়ে কাজ করা। 🚀🤖";
  }

  if (
    q.includes("creator's interests") ||
    q.includes("creator interests") ||
    q.includes("creator interest") ||
    q.includes("কি পছন্দ") ||
    q.includes("কোন বিষয়ে আগ্রহ")
  ) {
    return "Zakaria-এর প্রধান interests হলো AI, robotics, programming, mathematics এবং physics। 🧠🤖";
  }

  // Help
  if (
    q.includes("help") ||
    q.includes("সাহায্য") ||
    q.includes("হেল্প") ||
    q.includes("support")
  ) {
    return "🆘 AQLYVEN Help Team\n\nসাহায্য বা কোনো সমস্যা জানাতে যোগাযোগ করুন:\n\n📞 +880 965 874 0781\n\nআমাদের Help Team আপনাকে প্রয়োজনীয় সহায়তা দেওয়ার জন্য প্রস্তুত। 🤝";
  }

  // Identity / provider transparency
  if (
    q.includes("are you gpt") ||
    q.includes("are you gemini") ||
    q.includes("are you groq") ||
    q.includes("which ai") ||
    q.includes("কোন ai") ||
    q.includes("তুমি কি gpt") ||
    q.includes("তুমি কি gemini") ||
    q.includes("তুমি কি groq")
  ) {
    return "আমি AQLYVEN AI। আমার product identity হলো AQLYVEN। আমি প্রয়োজন অনুযায়ী বিভিন্ন AI technology ব্যবহার করতে পারি, কিন্তু নিশ্চিত নয় এমন তথ্য আমি বানিয়ে বলব না।";
  }

  return null;
}

module.exports = { identityReply };
