import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { FaUser, FaHashtag, FaFileAlt } from "react-icons/fa";

const PostCard = ({post}) => {
     const { userId, id, title, description } = post;
    return (
      <div className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition">
        {/* Top Info */}
        <div className="flex justify-between items-center mb-3 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <FaUser /> User: {userId}
          </span>
          <span className="flex items-center gap-1">
            <FaHashtag /> {id}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">
          <FaFileAlt className="text-blue-500" />
          {title}
        </h2>

        {/* Body */}
        <p className="text-gray-600 text-sm">{description}</p>

        {/* Button */}
        <Link href={`post/${id}`}>
          {" "}
          <Button variant="primary">Details More</Button>
        </Link>
      </div>
    );
};

export default PostCard;