import Card from "./Card";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    async function fetchMembers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const data = await response.json();
      setMembers(data);
    }
    fetchMembers();
  }, []);
  return (
    <div className="container">
      <h1 className="title">Club Members</h1>
      <div className="card-wrapper">
        {members.map((member) => (
          <Card key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
