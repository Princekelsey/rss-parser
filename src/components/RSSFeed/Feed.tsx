import React from "react";

interface Props {
  title: string;
  articleUrl: string;
  pubDate: string;
  creator: string;
}

const Feed: React.FC<Props> = ({ title, articleUrl, pubDate, creator }) => {
  return (
    <div className="feed-item">
      <h2>{title}</h2>
      <p>
        <strong>
          Article link:{" "}
          <a href={articleUrl} target="_black" rel="nofollow">
            {articleUrl}
          </a>
        </strong>
      </p>
      <p>
        <small className="small">{pubDate}</small> -{" "}
        <small className="small">{creator}</small>
      </p>
    </div>
  );
};

export default Feed;
