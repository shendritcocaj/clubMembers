import { useState, useEffect } from "react";

const Coments = () => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    async function fetchComments() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );

      let data = await response.json();
      const displayData = data.slice(0, 10);

      setComments(displayData);
    }
    fetchComments();
  }, []);
  return (
    <div className="comments">
      {" "}
      <p>All comments:</p>
      {comments.map((comment) => (
        <>
          <p className="comment">
            Nr.{comment.id}:{comment.body}
          </p>
        </>
      ))}
    </div>
  );
};

export default Coments;
