import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { AdjacentPostCard } from "../components";
import { getAdjacentPosts } from "../services";

function AdjacentPosts({ createdAt, slug, subcategoryName }) {
  const [adjacentPost, setAdjacentPost] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getAdjacentPosts(createdAt, slug, subcategoryName).then((result) => {
      setAdjacentPost(result);
      setDataLoaded(true);
    });
  }, [slug]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-8 gap-12 mb-8">
      {dataLoaded && (
        <>
          {adjacentPost.next && (
            <div
              className={`${
                adjacentPost.next
                  ? "col-span-1 lg:col-span-4"
                  : "col-span-1 lg:col-span-8"
              } adjacent-post rounded-lg relative h-72`}
            >
              <AdjacentPostCard post={adjacentPost.next} position="LEFT" />
            </div>
          )}
          {adjacentPost.previous && (
            <div
              className={`${
                adjacentPost.previous
                  ? "col-span-1 lg:col-span-4"
                  : "col-span-1 lg:col-span-8"
              } adjacent-post rounded-lg relative h-72`}
            >
              <AdjacentPostCard post={adjacentPost.previous} position="RIGHT" />
            </div>
          )}
        </>
      )}
    </div>
  );
}

AdjacentPosts.propTypes = {
  createdAt: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  subcategoryName: PropTypes.string.isRequired,
};

export default AdjacentPosts;
