import React from 'react';
import {Link} from 'react-router-dom';


export const AuthorProfile = (props) => {
  return (
    <div className="author-profile">
      <h1>{props.name}</h1>
      <p>{props.location}</p>
      <Link to={`/users/`} className="button">See Full Post</Link>
    </div>
  )
}