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
  } | null;
}

const placeholderData: serializedFeed[] = [
  {
    dateCreated: "2023-08-01",
    dateModified: "2023-08-01",
    id: "1",
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
    },
  },
  {
    dateCreated: "2023-08-02",
    dateModified: "2023-08-02",
    id: "2",
    title: "Sample Title 2",
    content: "This is the content of the second feed item.",
    slug: "sample-title-2",
    categoryId: 2,
    tags: ["tag3", "tag4"],
    status: "draft",
    featuredImage: "https://example.com/image2.jpg",
    userId: null,
    author: null,
  },
  {
    dateCreated: "2023-08-03",
    dateModified: "2023-08-03",
    id: "3",
    title: "Sample Title 3",
    content: null,
    slug: "sample-title-3",
    categoryId: 3,
    tags: ["tag5"],
    status: "published",
    featuredImage: null,
    userId: "user456",
    author: {
      name: "Jane Smith",
    },
  },
  {
    dateCreated: "2023-08-04",
    dateModified: "2023-08-04",
    id: "4",
    title: "Sample Title 4",
    content: "This is the content of the fourth feed item.",
    slug: null,
    categoryId: 1,
    tags: ["tag6"],
    status: "published",
    featuredImage: "https://example.com/image4.jpg",
    userId: "user789",
    author: null,
  },
  {
    dateCreated: "2023-08-05",
    dateModified: "2023-08-05",
    id: "5",
    title: "Sample Title 5",
    content: "This is the content of the fifth feed item.",
    slug: "sample-title-5",
    categoryId: 2,
    tags: ["tag7", "tag8"],
    status: "published",
    featuredImage: null,
    userId: null,
    author: {
      name: "Anonymous",
    },
  },
];

type BlogPageProps = {
  feed: serializedFeed[];
};

export const getServerSideProps: GetServerSideProps = async () => {
  const feed = await prisma.blogPost.findMany();
  const serializedFeed = feed.map((post) => ({
    ...post,
    dateCreated: post.dateCreated.toISOString(),
    dateModified: post.dateModified.toISOString(),
  }));
  console.log(serializedFeed, "<<<<-----");
  return {
    props: { feed: serializedFeed },
  };
};

const BlogPage = (props: BlogPageProps) => {
  console.log("----->>>>>", props.feed);

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
      <Layout>
        {props.feed ? (
          <div className="grid sm:grid-cols-2 max-w-screen-lg mx-auto mt-24">
            {props.feed.map((data) => (
              <BlogArticle post={data} />
            ))}
          </div>
        ) : (
          <ComingSoon pageName="Blog" />
        )}
      </Layout>
    </>
  );
};

export default BlogPage;
