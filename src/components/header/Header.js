import React from "react";

const Header = () => {
  const titleStyle = { fontSize: "40px", color: 'orange' };
  return (
    <div className="container mb-4 text-center">
      <h1 style={titleStyle}>
        SCIENTIST TEAM
      </h1>
      <p>
        “Science at NASA is all about exploring the endless frontier of the Earth and space.”
      </p>
      <h3>Total Budget: 100 Million</h3>
    </div>
  );
};

export default Header;
