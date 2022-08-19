import React from "react";
import PropTypes from "prop-types";
import { FeaturedPosts } from "../../sections/index";
import { PostCard, Categories, PostWidget } from "../../components";
import { getPosts } from "../../services";

function Home({ posts }) {
  return (
    <div className="container mx-auto lg:px-10 px-6 mb-8">
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => (
            <PostCard key={post?.createdAt} post={post.node} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-20">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
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
