import React, { useState } from "react";
import PropTypes from "prop-types";
import { FeaturedPosts } from "../../sections/index";
import { PostCard, PostWidget } from "../../components";
import { getPosts } from "../../services";

function Home({ posts }) {
  const [sizeAndPages, setSizeAndPages] = useState({ size: 3, page: 1 });
  const postsLength = posts?.length || 0;

  const { size, page } = sizeAndPages;

  return (
    <div className="container mx-auto lg:px-10 px-6 mb-8">
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.slice(0, size * page).map((post) => (
            <PostCard key={post?.createdAt} post={post.node} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1 hidden lg:inline">
          <div className="lg:sticky relative lg:top-20 -top-12">
            <PostWidget />
          </div>
        </div>
      </div>
      {size * page < postsLength && (
        <div className="text-center w-full flex justify-around max-w-7xl mx-auto">
          <button
            onClick={() => setSizeAndPages({ ...sizeAndPages, page: page + 1 })}
            type="button"
            className="w-60 transition duration-500 ease transform hover:-translate-y-1 flex bg-sky-500 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer"
          >
            Prikaži više vesti
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-5 m-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}

Home.propTypes = {
  posts: PropTypes.arrayOf.isRequired,
};
