import { getTasks } from '@/lib/postdata';
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { FaUser, FaHashtag, FaArrowLeft } from "react-icons/fa";

const PostDetis = async ({ params }) => {
    const {postid}= await params
    // console.log(postid)

  // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postid}`);
  // const post = await res.json();
  const postdata =await getTasks()
  console.log(postdata)


  const post =postdata.find(posts =>posts.id == postid)
  return (
    <section className="min-h-screen bg-base-200 py-10 px-5">
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}

        <Link
          href="/post"
          className=" btn-sm mb-5 flex items-center gap-2 w-fit"
        >
          <Button variant="ghost">
            <FaArrowLeft /> Back
          </Button>
        </Link>

        {/* Card */}
        <div className="bg-white p-6 rounded-2xl shadow">
          {/* Top Info */}
          <div className="flex justify-between text-sm text-gray-500 mb-3">
            <span className="flex items-center gap-1">
              <FaUser /> User: {post.id}
            </span>
            <span className="flex items-center gap-1">
              <FaHashtag /> {post.id}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold mb-4">{post.title}</h1>

          {/* Body */}
          <p className="text-gray-600 leading-relaxed">{post.description}</p>
        </div>
      </div>
    </section>
  );
};

export default PostDetis;