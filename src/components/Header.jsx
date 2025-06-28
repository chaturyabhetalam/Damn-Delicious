
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="brand">Damn Delicious</div>
      {/* <nav>
        <Link to="/">Home</Link>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav> */}
      <nav>
  <Link to="/">Home</Link>
  <Link to="/about">About</Link>
</nav>
      <input type="text" placeholder="Search recipes..." />
    </header>
  );
}
