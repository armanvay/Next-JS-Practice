import AddTasks from '@/component/AddTasks';
import PostCard from '@/component/PostCard';
import { getTasks } from '@/lib/postdata';
import Link from 'next/link';
import React from 'react';

// const postFromis =async()=>{
// const res =await fetch("https://jsonplaceholder.typicode.com/posts");
// const posts=await res.json()
// return posts
// }

const PostPage = async () => {
    const post =await getTasks()
    console.log(post.length)
    return (
      <div>
        <div className=" max-w-10/12 mx mx-auto text-2xl font-bold text-center my-5">
          <h2>All post {post.length}</h2>
        <AddTasks></AddTasks>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 max-w-10/12 mx mx-auto">
          {post.map((post) => (
            <PostCard key={post.id} post={post}></PostCard>
          ))}
        </div>
      </div>
    );
};

export default PostPage;