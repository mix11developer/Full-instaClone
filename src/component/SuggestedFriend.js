import React from 'react';
import './css/SuggestedFriend.css'


const SuggestedFriend = ({ user }) => {
  return (
    <div className="suggested-friend">
      <img src={user.profilePic} alt={user.username} />
      <div>
        <h3>{user.username}</h3>
        <p>Suggested for you</p>
      </div>
        <button>Follow</button>
    </div>
  );
};

export default SuggestedFriend;
