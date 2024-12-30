import React from 'react';
import { Link } from 'react-router-dom';
import { usePosts } from '../redux/PostContext';
import "../styles/PostsList.css";

const PostsList = () => {
  const { posts, setPosts, addNotification } = usePosts();

  const handleReaction = (id, type) => {
    const updatedPosts = posts.map((post) =>
      post.id === id
        ? {
            ...post,
            reactions: {
              ...post.reactions,
              [type]: post.reactions[type] + 1,
            },
          }
        : post
    );
    setPosts(updatedPosts);

    // Add notification
    const reactedPost = posts.find((post) => post.id === id);
    addNotification(`Reaction "${type}" added to "${reactedPost.title}" by ${reactedPost.author}`);
  };

  return (
    <div className="posts-list">
      {posts.length === 0 ? (
        <p>No posts yet!</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="post-card">
            <h3>{post.title}</h3>
            <p><strong>by {post.author}</strong> {post.time}</p>
            <p>{post.content}</p>
            <div className="reactions">
              <button onClick={() => handleReaction(post.id, 'thumbsUp')}>👍 {post.reactions.thumbsUp}</button>
              <button onClick={() => handleReaction(post.id, 'heart')}>❤️ {post.reactions.heart}</button>
              <button onClick={() => handleReaction(post.id, 'party')}>🎉 {post.reactions.party}</button>
              <button onClick={() => handleReaction(post.id, 'comments')}>💬 {post.reactions.comments}</button>
            </div>
            <Link to={`/view-post/${post.id}`}>
              <button className="view-post-btn">View Post</button>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default PostsList;
