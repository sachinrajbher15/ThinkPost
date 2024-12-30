import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { usePosts } from '../redux/PostContext';
import "../styles/ViewPost.css";

const ViewPost = () => {
  const { postId } = useParams(); // Get the postId from the URL
  const { posts } = usePosts(); // Get the posts from the context
  const [post, setPost] = useState(null);

  useEffect(() => {
    const foundPost = posts.find(post => post.id === parseInt(postId));
    if (foundPost) {
      setPost(foundPost);
    }
  }, [postId, posts]);

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div className="view-post">
      <h1>{post.title}</h1>
      <p><strong>by {post.author}</strong> {post.time}</p>
      <p>{post.content}</p>
      <div className="reactions">
        <button>👍 {post.reactions.thumbsUp}</button>
        <button>❤️ {post.reactions.heart}</button>
        <button>🎉 {post.reactions.party}</button>
        <button>💬 {post.reactions.comments}</button>
      </div>
      <Link to={`/edit-post/${post.id}`}>
        <button className="button">Edit Post</button>
      </Link>
    </div>
  );
};

export default ViewPost;
