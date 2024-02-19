import { prisma } from "../../../lib/prisma";

const getBlogPosts = async () => {
  const feed = await prisma.blogPost.findMany();
  const serializedFeed = feed.map((post) => ({
    ...post,
    dateCreated: post.dateCreated.toISOString(),
    dateModified: post.dateModified.toISOString(),
  }));
  return serializedFeed;
};

export default getBlogPosts;
