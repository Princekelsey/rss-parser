const Parser = require("rss-parser");
const parser = new Parser();

const Server = {
  getRSSFeeds: async (url: string) => {
    return await parser.parseURL(url);
  },
};

export default Server;
