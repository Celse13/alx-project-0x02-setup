import React, { useState } from "react";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import PostModal from "@/components/common/PostModal";
import { PostProps } from "@/interfaces";
import Header from "@/components/layout/Header";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<PostProps[]>([]);

  const handleAddPost = (newPost: PostProps) => {
    setPosts([...posts, newPost]);
  };

  return (
    <>
      <Header />
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Home</h1>
          <Button
            size="medium"
            shape="rounded-md"
            onClick={() => setIsModalOpen(true)}
          >
            Add Post
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.body} />
          ))}
        </div>

        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddPost}
        />
      </div>
    </>
  );
}
