const Parser = require("rss-parser");
const parser = new Parser();

const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

const Server = {
  getRSSFeeds: async (url: string) => {
    return await parser.parseURL(CORS_PROXY + url);
  },
};

export default Server;
