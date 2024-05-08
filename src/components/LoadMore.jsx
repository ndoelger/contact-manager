import React from "react";

export const LoadMore = ({fetchMoreContacts}) => {
  return (
    <div className="join">
      <button onClick={fetchMoreContacts} className="join-item btn">
        Load More
      </button>
    </div>
  );
};
