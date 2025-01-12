import React from 'react';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-gray-800 text-white p-4">
            <nav className="container mx-auto flex gap-4">
                <Link href="/home" className="hover:text-gray-300"> Home</Link>
                <Link href="/about" className="hover:text-gray-300">A bout</Link>
                <Link href="/posts" className="hover:text-gray-300">Posts</Link>
                <Link href="/users" className="hover:text-gray-300">Users</Link>
            </nav>
        </header>
    )
}