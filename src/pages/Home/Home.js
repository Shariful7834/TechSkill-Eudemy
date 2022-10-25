import React from "react";
import { AuthContext } from "../../context/UserContext";
import { useContext } from "react";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1>home page</h1>
      <h2>Welcome Mr {user.displayName}</h2>
    </div>
  );
};

export default Home;
