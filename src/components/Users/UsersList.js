import React from "react";
import UserItem from "./UserItem";

const UsersList = ({ items }) => {
  if (items.length === 0) {
    return (
      <div>
        <h2>No users found</h2>
      </div>
    );
  }
  return (
    <ul className="userlists">
      {items.map((user) => {
        return <UserItem key={user.id} {...user} />;
      })}
    </ul>
  );
};

export default UsersList;
