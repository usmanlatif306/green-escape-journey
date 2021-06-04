import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Particles from "react-particles-js";
import Carddata from "./components/Carddata";
import Whygej from "./components/Whygej";
import NewCard from "./components/NewCard";
import { useAuth } from "./Context/AuthContext";

function ncard(val) {
  return (
    <NewCard
      key={val.id}
      ssrc={val.ssrc}
      duration={val.duration}
      about={val.about}
      title={val.title}
    />
  );
}

const Home1 = () => {
  const { user, setUser, currentUser, setCurrentUser, logout } = useAuth();
  if (currentUser && user) {
    if (user.status === "block") {
      alert("Your account has been blocked by Admin.");
      logout();
      setUser(null);
      setCurrentUser(null);
    }
  }

  return (
    <div>
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 60,
              density: { enable: true, value_area: 900 },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "grey",
              },
            },
          },
        }}
      />
      <Navbar />

      <Header />

      <div  style={{backgroundColor:"#C0C0C0"}} className="forplan">
        {" "}
        <h1  >Pakistan Most vizited Cities</h1>{" "}
      </div>
      {Carddata.map(ncard)}

      <Whygej />
    </div>
  );
};

export default Home1;
