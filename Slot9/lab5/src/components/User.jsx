import React from 'react';

const User = ({ user }) => {
  return (
    <div style={{border:'1px solid #ddd', padding:'10px', marginBottom:'10px'}}>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
};

export default User;
