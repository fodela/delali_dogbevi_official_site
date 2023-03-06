import Image from "next/image";
import React from "react";
import GlassyButton from "../GlassyButton";
import Link from "next/link";
import { serializedFeed } from "../../pages/blog";

const BlogArticle = ({ post }: { post: serializedFeed }) => {
  return (
    <Link href="/">
      <article className="shadow-xl p-2 cursor-pointer group">
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
              <p>Delali Jean-Pierre Dogbevi</p>
              <p>12 May 2023</p>
            </div>
            <div className="">Design</div>
          </figcaption>
        </figure>
        {/* <h2>{post.title}</h2>
      <p>{post.slug}</p> */}
        <h2 className="pt-4 pb-2 text-2xl font-bold underline">
          UX review presentations
        </h2>
        <p>
          How do you create compelling presentations that wow you colleagues and
          impress your managers? Look no further...
        </p>
        <GlassyButton name="Read post" />
      </article>
    </Link>
  );
};

export default BlogArticle;
