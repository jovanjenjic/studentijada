import React from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

import { getCategories, getCategoryPost } from "../../services";
import { PostCard, Loader, AfterMovie, Support21 } from "../../components";

function CategoryPost({ posts }) {
  const router = useRouter();
  const splitedRoute = router.asPath.split("/");

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <>
      {splitedRoute.includes("codeference2021") && (
        <>
          <AfterMovie />
          <Support21 />
        </>
      )}
      <div className="container mx-auto lg:px-10 px-6 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="relative -top-80 col-span-1 lg:col-span-8 lg:col-start-3 mt-8">
            {posts.map((post) => (
              <PostCard key={post.createdAt} post={post.node} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default CategoryPost;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);

  return {
    props: { posts },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}

CategoryPost.propTypes = {
  posts: PropTypes.arrayOf.isRequired,
};
