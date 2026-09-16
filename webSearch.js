const axios = require("axios");
const cheerio = require("cheerio");

async function webSearch(query) {
  try {
    const response = await axios.get("https://news.google.com/rss/search", {
      params: {
        q: query,
        hl: "en-US",
        gl: "US",
        ceid: "US:en"
      },
      headers: {
        "User-Agent": "Mozilla/5.0"
      },
      timeout: 15000
    });

    const $ = cheerio.load(response.data, { xmlMode: true });
    const results = [];

    $("item").each((i, el) => {
      if (results.length >= 8) return;

      const title = $(el).find("title").text().trim();
      const link = $(el).find("link").text().trim();
      const pubDate = $(el).find("pubDate").text().trim();
      const source = $(el).find("source").text().trim();
      const description = $(el).find("description").text().trim();

      if (title && link) {
        results.push({
          title,
          source,
          pubDate,
          text: cheerio.load(description).text().trim().slice(0, 500),
          url: link
        });
      }
    });

    return results;
  } catch (error) {
    console.error("Dragon Update Search Error:", error.message);
    return [];
  }
}

module.exports = { webSearch };
