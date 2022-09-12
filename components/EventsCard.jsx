import React from "react";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";

function EventsCard({ post }) {
  return (
    <div className="relative h-72">
      <div
        className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72"
        style={{ backgroundImage: `url('${post?.image?.url}')` }}
      />
      <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72" />
      <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
        <p className="text-white mb-4 text-shadow font-semibold text-xs">
          {dayjs(post?.date || post.createdAt).format("DD.MM.YYYY.")}
        </p>
        <p className="text-white mb-4 text-shadow font-semibold text-2xl text-center">
          {post.title}
        </p>
        <div className="flex items-center absolute bottom-5 w-full justify-center">
          <Image
            unoptimized
            alt={post.name}
            height="30px"
            width="30px"
            className="align-middle drop-shadow-lg rounded-full"
            src={post?.image?.url}
          />
          <p className="inline align-middle text-white text-shadow ml-2 font-medium">
            {post.name}
          </p>
        </div>
      </div>
      <Link href={`/post/${post.slug}`}>
        <span className="cursor-pointer absolute w-full h-full" />
      </Link>
    </div>
  );
}

EventsCard.propTypes = {
  post: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default EventsCard;