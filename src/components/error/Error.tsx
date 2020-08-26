import React from "react";

const Error: React.FC = () => {
  return (
    <div className="container">
      <div className="feed-item">
        <h2 className="text-center">
          Oops!! An error occured please make sure you entered a valid RSSFeed
          Url and try again
        </h2>
      </div>
    </div>
  );
};

export default Error;
