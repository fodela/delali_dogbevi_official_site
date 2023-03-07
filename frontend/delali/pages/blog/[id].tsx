import { GetServerSideProps } from "next";
import { prisma } from "../../lib/prisma";

import React from "react";

const index = () => {
  return <div>index</div>;
};

export default index;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const post = await prisma.blogPost.findUnique({
    where: {
      id: String(params?.id),
    },
    include: {
      author: {
        select: {
          name: true,
        },
      },
    },
  });
  return { props: { post } };
};
