import React from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

import {
  getCategories,
  getSubcategoryDetails,
  getSubcategoryPost,
} from "../../services";
import { PostCard, Loader, AfterMovie, Support } from "../../components";

function CategoryPost({ posts, subcategories }) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <>
      <AfterMovie
        videoBgUrl={subcategories?.videoBgUrl}
        videoUrl={subcategories?.videoUrl}
        subcategories={subcategories}
        images={subcategories?.images}
      />
      <Support />
      <div className="container mx-auto lg:px-10 px-6 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="relative col-span-1 lg:col-span-8 lg:col-start-3 mt-8">
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
  const posts = await getSubcategoryPost(params.subSlug);
  const subcategories = await getSubcategoryDetails(params.subSlug);

  return {
    props: { posts, subcategories: subcategories?.subcategory },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();

  const paths = [];
  categories?.forEach((cat) => {
    cat?.subcategories?.forEach((sub) => {
      paths.push({ params: { slug: cat.slug, subSlug: sub?.slug } });
    });
  });

  return {
    paths,
    fallback: true,
  };
}

CategoryPost.propTypes = {
  posts: PropTypes.arrayOf.isRequired,
  subcategories: PropTypes.arrayOf.isRequired,
};
