import { prisma } from "../../../lib/prisma";

const getBlogPosts = async () => {
  const blogPosts = await prisma.blogPost.findMany();

  return blogPosts;
};

export default getBlogPosts;
