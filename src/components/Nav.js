import React from "react";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <ul className="nav">
      <li>
        <NavLink exact activeClassName="active" to="/">
          Blog Preview
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/newblogpost">
          New Blog Post
        </NavLink>
      </li>
    </ul>
  );
};
