// PostContext.js
import React, { createContext, useState, useContext } from 'react';

const PostContext = createContext();

export const usePosts = () => {
  return useContext(PostContext);
};

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [notifications, setNotifications] = useState([]);

  const addNotification = (message) => {
    setNotifications((prev) => [...prev, { id: Date.now(), message }]);
  };

  return (
    <PostContext.Provider value={{ posts, setPosts, notifications, addNotification }}>
      {children}
    </PostContext.Provider>
  );
};
