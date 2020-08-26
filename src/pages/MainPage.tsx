import React, { useState } from "react";
import SearchContainer from "../components/search-container/SearchContainer";
import Server from "../api/Server";
import Feeds from "../components/RSSFeed/Feeds";
import Spinner from "../components/spinner/Spinner";
import Error from "../components/error/Error";

interface FeedsData {
  items: any[];
  title: string;
  description: string;
}

interface PageData {
  currentPage: number;
  feedsPerPage: number;
}

const MainPage: React.FC = () => {
  const [rssFeeds, setFeeds] = useState<null | FeedsData>(null);
  const [isFetching, setIsFetching] = useState(false);
  const [isError, setError] = useState(false);
  const [page, setPage] = useState<PageData>({
    currentPage: 1,
    feedsPerPage: 6,
  });

  const { currentPage, feedsPerPage } = page;

  // Logic for displaying current feed
  const indexOfLastFeed = currentPage * feedsPerPage;
  const indexOfFirstFeed = indexOfLastFeed - feedsPerPage;
  const currentFeed = rssFeeds
    ? rssFeeds.items.slice(indexOfFirstFeed, indexOfLastFeed)
    : [];

  const handlePageChange = (pageNo: number): void => {
    setPage({ ...page, currentPage: pageNo });
  };

  const handleSearch = (url: string) => {
    setIsFetching(true);
    setFeeds(null);
    setError(false);
    setPage({ ...page, currentPage: 1 });
    getFeeds(url);
  };

  const getFeeds = async (url: string): Promise<void> => {
    try {
      const feed = await Server.getRSSFeeds(url);
      setIsFetching(false);
      setError(false);
      setFeeds(feed);
    } catch (error) {
      setFeeds(null);
      setError(true);
      setIsFetching(false);
    }
  };

  return (
    <main>
      <SearchContainer handleSearch={handleSearch} />
      {isFetching && <Spinner />}
      {rssFeeds && (
        <Feeds
          feedDate={{
            feedItems: rssFeeds.items,
            feedTitle: rssFeeds.title,
            description: rssFeeds.description,
            currentFeed,
          }}
          currentPage={currentPage}
          feedsPerPage={feedsPerPage}
          handlePageChange={handlePageChange}
        />
      )}
      {isError && <Error />}
    </main>
  );
};

export default MainPage;
