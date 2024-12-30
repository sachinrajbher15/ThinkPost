import React from 'react';
import { useParams } from 'react-router-dom';
import { usePosts } from '../redux/PostContext';
import "../styles/AuthorPosts.css"

const AuthorPosts = () => {
  const { authorName } = useParams(); // Get the author name from the URL
  const { posts } = usePosts(); // Get the posts from the context

  const authorPosts = posts.filter((post) => post.author === authorName);

  return (
    <div className="all-users-page">
      <h1>Posts by {authorName}</h1>
      {authorPosts.length === 0 ? (
        <p>No posts by this author</p>
      ) : (
        authorPosts.map((post) => (
          <div key={post.id} className="user-posts">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p><strong>by {post.author}</strong> {post.time}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default AuthorPosts;
