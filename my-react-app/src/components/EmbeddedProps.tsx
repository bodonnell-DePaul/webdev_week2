import React from "react";
import type { UserCardProps } from "../types/Props";

const UserCard: React.FC<UserCardProps> = ({ 
  user, 
  onEdit, 
  onDelete, 
  showActions = true 
}) => {
  return (
    
    <div className="user-card">
        <h1>UserProp</h1>
      {user.avatar && <img src={user.avatar} alt={`${user.name}'s avatar`} />}
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      
      {showActions && (
        <div className="user-actions">
          {onEdit && (
            <button onClick={() => onEdit(user)}>Edit</button>
          )}
          {onDelete && (
            <button onClick={() => onDelete(user.id)}>Delete</button>
          )}
        </div>
      )}
    </div>
  );
};

export default UserCard;