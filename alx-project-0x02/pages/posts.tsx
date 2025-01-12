import React from "react";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";
import Header from "@/components/layout/Header";

export default function Posts({ posts }: { posts: PostProps[] }) {
  return (
    <>
      <Header />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Posts</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              content={post.body}
              userId={post.userId}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const posts = await response.json();

    return {
      props: {
        posts,
      },
      revalidate: 60,
    };
  } catch (error) {
    return {
      props: {
        posts: [],
      },
    };
  }
}
