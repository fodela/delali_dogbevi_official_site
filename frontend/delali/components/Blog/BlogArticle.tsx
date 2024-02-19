import Image from "next/image";
import React from "react";
import GlassyButton from "../GlassyButton";
import Link from "next/link";
import { serializedFeed } from "../../app/blog/page";

const BlogArticle = ({ post }: { post: serializedFeed }) => {
  return (
    <Link key={post.id} href={`blog/${post.id}`}>
      <article className="shadow-xl p-2 cursor-pointer group  bg-color_gray_for_light_mode rounded dark:bg-color_gray_for_dark_mode">
        <figure className="relative overflow-hidden">
          <Image
            width={500}
            height={300}
            className="rounded-t-md transition-all duration-500 group-hover:scale-125"
            src={
              // post.featuredImage ||
              "/logo/logo_icon_double_dark.svg"
            }
            alt="Cover of image of blog post"
          />
          <figcaption className="absolute bottom-0 left-0 right-0 flex justify-between px-6 py-3 backdrop-blur-sm bg-black/50 text-white rounded-t-2xl">
            <div className="">
              <p>{post.author?.name}</p>
              <p>{post.dateCreated}</p>
            </div>
            <div className="flex gap-2">
              {post.tags.map((tag) => (
                <div>{tag}</div>
              ))}
            </div>
          </figcaption>
        </figure>
        {/* <h2>{post.title}</h2>
      <p>{post.slug}</p> */}
        <h2 className="pt-4 pb-2 text-2xl font-bold underline">{post.title}</h2>
        <p>{post.slug}</p>
        <GlassyButton name="Read post" link={`blog/${post.id}`} />
      </article>
    </Link>
  );
};

export default BlogArticle;
