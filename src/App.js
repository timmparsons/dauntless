import React from "react";
import ReactDOM from "react-dom";
import { BlogPost } from "./components/BlogPost";
import { Author } from "./components/Author";
import { ViewPreview } from "./components/ViewPreview";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import {NewBlogPost} from "./components/NewBlogPost";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Route exact path="/" component={ViewPreview} />
          <Route exact path="/posts/:postId" component={BlogPost} />
          <Route exact path="/authors/:authorId" component={Author} />
          <Route exact path="/newblogpost" component={NewBlogPost} />
        </div>
      </Router>
    );
  }
}


export default App;