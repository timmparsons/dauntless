import React from "react";
import { Link } from "react-router-dom";

export const BlogPreview = props => {
  return (
    <div className="blog-preview">
      <img src="https://picsum.photos/40/40" alt="#" />
      <h1>{props.title.substring(0, 15)}</h1>
      <p>{props.body.substring(0, 27) + "..."}</p>
      <Link to={`/posts/${props.id}`} className="button">
        See Full Post
      </Link>
    </div>
  );
};
