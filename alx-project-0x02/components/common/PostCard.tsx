import React from 'react';
import Card from './Card';

interface PostCardProps {
  title: string;
  content: string;
  userId?: number;
}

export default function PostCard({ title, content, userId }: PostCardProps) {
  return (
    <Card title={title} content={content}>
      {userId && (
        <div className="mt-2 text-sm text-gray-500">
          Author ID: {userId}
        </div>
      )}
    </Card>
  );
}
