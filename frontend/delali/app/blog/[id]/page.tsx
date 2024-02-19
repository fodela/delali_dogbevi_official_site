import { prisma } from "../../../lib/prisma";

import React from "react";
import { serializedFeed } from "../page";
import { MdArrowBack } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import image from "../../../public/gif/effect.gif";
import logo from "../../../public/logo/logo_icon_double_dark.svg";

const PostDetailPage = ({ post }: { post: serializedFeed }) => {
  return (
    <div className="mt-32 max-w-screen-md mx-auto">
      <header className="">
        <div className="flex gap-2 items-center underline">
          <MdArrowBack />
          <Link href="/blog">Back</Link>
        </div>
        <h1 className="heading_primary">
          This is the article name - Headline lorem ipsum
        </h1>
        <div className="flex gap-4 items-center">
          <div className=" rounded-full border h-12 w-12 logo"></div>
          <div className="">
            <p className="font-bold">Delali Jean-Pierre Dogbevi</p>
            <p className="text-sm opacity-80">
              Fullstack developer @ ACTS-Ghana
            </p>
          </div>
        </div>
      </header>
      <article className="flex flex-col gap-4 my-8">
        <Image
          src={image}
          alt="article cover image"
          height={480}
          width={800}
          className="rounded-lg"
        />
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
          cumque iusto distinctio quos asperiores quisquam saepe commodi
          molestias ipsum! Tenetur, saepe eum enim incidunt a quas excepturi.
          Consequatur, officia tempora!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sapiente
          nostrum error exercitationem dignissimos. Recusandae adipisci amet aut
          dolorem hic eos. Suscipit vitae consectetur mollitia cupiditate sint.
          Quis, facere eaque.
        </p>
      </article>
    </div>
  );
};

export default PostDetailPage;
