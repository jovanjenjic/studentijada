import React, { useState, useEffect } from "react";
import Image from "next/image";
import dayjs from "dayjs";
import Link from "next/link";
import PropTypes from "prop-types";

import { grpahCMSImageLoader } from "../util";
import { getSimilarPosts, getRecentPosts } from "../services";

function PostWidget({ subcategoryName, slug }) {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(subcategoryName, slug).then((result) => {
        setRelatedPosts(result.reverse());
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result.reverse());
      });
    }
  }, [slug]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {slug ? "Povezane Vesti" : "Nedavne Vesti"}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.createdAt} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <Image
              loader={grpahCMSImageLoader}
              alt={post.title}
              height="60px"
              width="60px"
              unoptimized
              className="align-middle rounded-full"
              src={post.featuredImage.url}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs">
              {dayjs(post?.date || post.createdAt).format("MMM DD, YYYY")}
            </p>
            <Link
              href={`/post/${post.slug}`}
              className="text-md"
              key={post.createdAt}
            >
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

PostWidget.propTypes = {
  subcategoryName: PropTypes.arrayOf.isRequired,
  slug: PropTypes.string.isRequired,
};

export default PostWidget;
