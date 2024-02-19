import { GetServerSideProps, GetStaticProps } from "next";
import { getSession, useSession } from "next-auth/react";

import React from "react";
import { prisma } from "../../lib/prisma";
import GlassyButton from "../../components/GlassyButton";
import BlogArticle from "../../components/Blog/BlogArticle";
import { Session } from "@prisma/client";
import getBlogPosts from "../api/blog/getBlogPosts";
import Dashboard from "../../components/Dashboard";
import Layout from "../../components/Layout/Layout";
import Head from "next/head";
import ComingSoon from "../../components/ComingSoon";

export interface serializedFeed {
  dateCreated: string;
  dateModified: string;
  id: string;
  title: string;
  content: string | null;
  slug: string | null;
  categoryId: number;
  tags: string[];
  status: string;
  featuredImage: string | null;
  userId: string | null;
  author: {
    name: string | null;
    image_link: string | null;
  } | null;
}

const placeholderData: serializedFeed[] = [
  {
    dateCreated: "2023-08-01",
    dateModified: "2023-08-01",
    id: "1",
    title: "How I built my website",
    content: "This is the content of the first feed item.",
    slug: "It may seem trivial now a days...",
    categoryId: 1,
    tags: ["tag1", "tag2"],
    status: "published",
    featuredImage: "https://example.com/image1.jpg",
    userId: "user123",
    author: {
      name: "John Doe",
      image_link: "/logo/logo_icon_double_dark.svg",
    },
  },
  {
    dateCreated: "2023-08-01",
    dateModified: "2023-08-01",
    id: "2",
    title: "Sample Title 1",
    content: "This is the content of the first feed item.",
    slug: "sample-title-1",
    categoryId: 2,
    tags: ["tag1", "tag2"],
    status: "published",
    featuredImage: "https://example.com/image1.jpg",
    userId: "user123",
    author: {
      name: "Delali Jean-Pierre Dogbevi",
      image_link: "/logo/logo_icon_double_dark.svg",
    },
  },
  {
    dateCreated: "2023-08-01",
    dateModified: "2023-08-01",
    id: "3",
    title: "Sample Title 1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, iste harum velit, voluptates illum aspernatur rerum voluptas vel adipisci modi mollitia culpa tempora ratione nisi voluptatibus officiis, labore assumenda minima?",
    slug: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, iste harum velit, voluptates...",
    categoryId: 1,
    tags: ["tag1", "tag2"],
    status: "published",
    featuredImage: "https://example.com/image1.jpg",
    userId: "user123",
    author: {
      name: "Laura Sefah Bosompem",
      image_link: "/logo/logo_icon_double_dark.svg",
    },
  },
  {
    dateCreated: "2023-08-01",
    dateModified: "2023-08-01",
    id: "4",
    title: "Sample Title 1",
    content: "This is the content of the first feed item.",
    slug: "sample-title-1",
    categoryId: 1,
    tags: ["tag1", "tag2"],
    status: "published",
    featuredImage: "https://example.com/image1.jpg",
    userId: "user123",
    author: {
      name: "John Doe",
      image_link: "/logo/logo_icon_double_dark.svg",
    },
  },
  {
    dateCreated: "2023-08-01",
    dateModified: "2023-08-01",
    id: "5",
    title: "Sample Title 1",
    content: "This is the content of the first feed item.",
    slug: "sample-title-1",
    categoryId: 1,
    tags: ["tag1", "tag2"],
    status: "published",
    featuredImage: "https://example.com/image1.jpg",
    userId: "user123",
    author: {
      name: "John Doe",
      image_link: "/logo/logo_icon_double_dark.svg",
    },
  },
];

type BlogPageProps = {
  feed: serializedFeed[];
};

const BlogPage = async () => {
  const posts = await getBlogPosts();

  return (
    <>
      <Head>
        <title>Delali Dogbevi | Blog</title>
        <link rel="icon" href="/logo/logo_icon_double_dark.svg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
          rel="stylesheet"
        />
      </Head>
      {posts ? (
        <div className="grid sm:grid-cols-2 max-w-screen-lg mx-auto mt-24 gap-8">
          {posts.map((data) => (
            <BlogArticle post={data} />
          ))}
        </div>
      ) : (
        <ComingSoon pageName="Blog" />
      )}
    </>
  );
};

export default BlogPage;
