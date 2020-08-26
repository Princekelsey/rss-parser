import React from "react";
import Feed from "./Feed";
import "./feed.styles.css";
import Pagination from "../pagination/Pagination";

interface Props {
  feedDate: {
    feedTitle: string;
    description: string;
    feedItems: any[];
    currentFeed: any[];
  };
  currentPage: number;
  feedsPerPage: number;
  handlePageChange: (pageNo: number) => void;
}

const Feeds: React.FC<Props> = ({
  feedDate,
  currentPage,
  feedsPerPage,
  handlePageChange,
}) => {
  const { feedTitle, description, feedItems, currentFeed } = feedDate;

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="feed-container">
          <div className="feed-item">
            <h2 className="text-center">{feedTitle}</h2>
            <div>
              <strong>Feed Description: </strong> {description}
            </div>
          </div>
          {currentFeed.map((item, index) => {
            const { title, creator, pubDate, link } = item;
            return (
              <Feed
                key={index}
                title={title}
                creator={creator}
                articleUrl={link}
                pubDate={pubDate}
              />
            );
          })}
        </div>
      </div>
      {feedItems.length > feedsPerPage ? (
        <div className="mt-3 mb-3 feedpage-container">
          <div className="pagination-wrapper">
            <Pagination
              currentPage={currentPage}
              pageLength={feedsPerPage}
              handlePageChange={handlePageChange}
              items={feedItems}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Feeds;
