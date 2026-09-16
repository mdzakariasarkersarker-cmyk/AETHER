const axios = require("axios");

async function webSearch(query) {
  try {
    const url = "https://api.duckduckgo.com/";
    const response = await axios.get(url, {
      params: {
        q: query,
        format: "json",
        no_html: 1,
        skip_disambig: 1
      },
      timeout: 10000
    });

    const data = response.data;

    const results = [];

    if (data.AbstractText) {
      results.push({
        title: data.Heading || query,
        text: data.AbstractText,
        url: data.AbstractURL || ""
      });
    }

    if (Array.isArray(data.RelatedTopics)) {
      for (const item of data.RelatedTopics) {
        if (item.Text) {
          results.push({
            title: item.Text.slice(0, 100),
            text: item.Text,
            url: item.FirstURL || ""
          });
        }

        if (results.length >= 5) break;
      }
    }

    return results;
  } catch (error) {
    console.error("Web Search Error:", error.message);
    return [];
  }
}

module.exports = { webSearch };
