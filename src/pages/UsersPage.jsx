import React from 'react';
import { Link } from 'react-router-dom';
import { usePosts } from '../redux/PostContext';
import "../styles/UsersPage.css"

const UsersPage = () => {
  const { posts } = usePosts(); // Get the posts from the context

  // Get unique authors
  const authors = [...new Set(posts.map((post) => post.author))];

  return (
    <div className='all-users-page'>
      <h1>All Authors</h1>
      {authors.length === 0 ? (
        <p>No authors available</p>
      ) : (
        authors.map((author, index) => (
          <div key={index} className='users'>
            <h3>
              <Link to={`/author-posts/${author}`}>{author}</Link>
            </h3>
          </div>
        ))
      )}
    </div>
  );
};

export default UsersPage;
