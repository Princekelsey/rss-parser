import React from "react";

const Error: React.FC = () => {
  return (
    <div className="container">
      <div className="feed-item">
        <h2 className="text-center">
          Oops!! An error occured. Please make sure you enter a valid RSSFeed
          url and try again
        </h2>
      </div>
    </div>
  );
};

export default Error;
