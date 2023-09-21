import { useState } from "react";
import Coments from "./Coments";

const Card = ({ member }) => {
  const [showComments, setShowComments] = useState(false);

  const { name, username, address, email } = member;

  return (
    <div className="members-wrapper">
      <div className="member">
        <p className="user-name">name: {name}</p>
        <p className="user-username">username: {username}</p>
        <p className="user-email">email: {email}</p>
        <p className="user-addres">
          addres: <span>{address.street}</span> -<span>{address.suite}</span>
        </p>
        <button
          onClick={() => setShowComments(!showComments)}
          className="show-comments"
        >
          Show comments
        </button>
        {showComments && <Coments />}
      </div>
    </div>
  );
};

export default Card;
