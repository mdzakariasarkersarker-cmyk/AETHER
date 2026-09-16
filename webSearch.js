const axios = require("axios");
const cheerio = require("cheerio");
const { GoogleDecoder } = require("google-news-url-decoder");
const googleDecoder = new GoogleDecoder();

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

    const items = $("item").toArray();

    await Promise.all(items.map(async (el, i) => {
      if (results.length >= 8) return;

      const title = $(el).find("title").text().trim();
      const link = $(el).find("link").text().trim();
      const pubDate = $(el).find("pubDate").text().trim();
      const source = $(el).find("source").text().trim();
      const description = $(el).find("description").text().trim();

      if (title && link && results.length < 8) {
        let originalUrl = link;

        try {
          const decoded = await googleDecoder.decode(link);
          if (decoded && decoded.status && decoded.decoded_url) {
            originalUrl = decoded.decoded_url;
          }
        } catch {}

        results.push({
          title,
          source,
          pubDate,
          text: cheerio.load(description).text().trim().slice(0, 500),
          url: originalUrl
        });
      }
    }));

    return results;
  } catch (error) {
    console.error("Dragon Update Search Error:", error.message);
    return [];
  }
}

module.exports = { webSearch };
