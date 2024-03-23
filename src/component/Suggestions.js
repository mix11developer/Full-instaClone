import React from 'react';
import SuggestedFriend from './SuggestedFriend';
// import './css/Suggestions.css'


const Suggestions = () => {
  const suggestedUsers = [
    {
      id: 1,
      username: "john_doe",
      profilePic: "https://storage.live.com/users/0x2da31a79ab642fb3/myprofile/expressionprofile/profilephoto:UserTileStatic/p?ck=1&ex=720&sid=34CC91754140679D0EC0857F40BA6676&fofoff=1",
      bio: "Web developer, coffee lover",
    },
    {
      id: 2,
      username: "sara_smith",
      profilePic: "https://storage.live.com/users/0x2da31a79ab642fb3/myprofile/expressionprofile/profilephoto:UserTileStatic/p?ck=1&ex=720&sid=34CC91754140679D0EC0857F40BA6676&fofoff=1",
      bio: "Nature enthusiast and photographer",
    },
    {
      id: 3,
      username: "alex_jones",
      profilePic: "https://storage.live.com/users/0x2da31a79ab642fb3/myprofile/expressionprofile/profilephoto:UserTileStatic/p?ck=1&ex=720&sid=34CC91754140679D0EC0857F40BA6676&fofoff=1",
      bio: "Traveler and foodie",
    },
    {
      id: 4,
      username: "emily_wilson",
      profilePic: "https://storage.live.com/users/0x2da31a79ab642fb3/myprofile/expressionprofile/profilephoto:UserTileStatic/p?ck=1&ex=720&sid=34CC91754140679D0EC0857F40BA6676&fofoff=1",
      bio: "Art and music lover",
    },
    {
      id: 5,
      username: "mike_brown",
      profilePic: "https://storage.live.com/users/0x2da31a79ab642fb3/myprofile/expressionprofile/profilephoto:UserTileStatic/p?ck=1&ex=720&sid=34CC91754140679D0EC0857F40BA6676&fofoff=1",
      bio: "Fitness enthusiast and athlete",
    },
  ];



  return (
    <div className="suggestions">
      <h2>Suggested Friends</h2>
      {suggestedUsers && suggestedUsers.map(user => (
        <SuggestedFriend key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Suggestions;
