import React, {useState} from 'react';
import Button from './Button';
import { PostProps } from '@/interfaces';

interface PostModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (post: PostProps) => void;
}

export default function PostModal({isOpen, onClose, onSubmit}: PostModalProps) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({title, content})
        setTitle('');
        setContent('');
        onClose();

        if (!isOpen) return null;
    }

    return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Create New Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-2 border rounded"
              rows={4}
              required
            />
          </div>
          <div className="flex justify-end gap-2">
            <Button size="small" shape="rounded-md" onClick={onClose}>
              Cancel
            </Button>
            <Button size="small" shape="rounded-md" type='submit'>
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
    );
}