import React from 'react';
import { Link } from 'react-router-dom';
import { usePosts } from '../redux/PostContext';
import "../styles/UserPostsPage.css"
const UserPosts = () => {
  const { posts } = usePosts(); // Get the posts from the context

  return (
    <div className='all-posts-page'>
      <h1>All Posts</h1>
      {posts.length === 0 ? (
        <p>No posts available</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="all-post">
            <h3>
              <Link to={`/view-post/${post.id}`}>{post.title}</Link>
            </h3>
          </div>
        ))
      )}
    </div>
  );
};

export default UserPosts;
