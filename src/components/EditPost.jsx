import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { usePosts } from '../redux/PostContext';
import '../styles/EditPost.css';

const EditPost = () => {
  const { id } = useParams();
  const { posts, setPosts, addNotification } = usePosts();
  const post = posts.find((p) => p.id === parseInt(id));
  const navigate = useNavigate();  // Corrected here

  const [editedPost, setEditedPost] = useState(post);

  const handleEdit = () => {
    const updatedPosts = posts.map((p) => (p.id === editedPost.id ? editedPost : p));
    setPosts(updatedPosts);

    // Add notification
    addNotification(`Post "${editedPost.title}" was edited by ${editedPost.author}`);

    navigate('/user-posts'); // Corrected to use 'navigate'
  };

  if (!post) return <p>Post not found</p>;

  return (
    <div className="edit-post-container">
      <h1>Edit Post</h1>
      <input
        type="text"
        value={editedPost.title}
        onChange={(e) => setEditedPost({ ...editedPost, title: e.target.value })}
      />
      <textarea
        value={editedPost.content}
        onChange={(e) => setEditedPost({ ...editedPost, content: e.target.value })}
      ></textarea>
      <button onClick={handleEdit}>Save Changes</button>
    </div>
  );
};

export default EditPost;
