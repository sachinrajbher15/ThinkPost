import React from 'react';
import { usePosts } from '../redux/PostContext';
import "../styles/Notifications.css";

const NotificationsPage = () => {
  const { notifications } = usePosts();

  return (
    <div className='notifications-container'>
      <h1>All Notifications</h1>
      {notifications.length === 0 ? (
        <p>No notifications yet</p>
      ) : (
        notifications.map((notification) => (
          <div key={notification.id} className="notification-card">
            {notification.message}
          </div>
        ))
      )}
    </div>
  );
};

export default NotificationsPage;
