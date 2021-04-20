import React from "react";
import useStore from "../store/store";
import Browse from "./Browse";
import "./Home.scss";

const Home = () => {
  let accessToken = useStore(state => state.accessToken);

  return (
    <div>
      <div className="viewContainer">
        <div className="leftContainer"></div>
        <div className="rightContainer">
          <Browse />
        </div>
      </div>
    </div>
  );
};

export default Home;
