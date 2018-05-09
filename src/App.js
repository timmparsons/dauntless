import React from 'react';
import {BlogPost} from './components/BlogPost';
import {Author} from './components/Author';
import {AuthorPreview} from './components/AuthorPreview';
import {ViewPreview} from './components/ViewPreview';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import {Nav} from './components/Nav';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Route exact path="/" component={ViewPreview} />
          <Route exact path="/posts/:postId" component={BlogPost} />
          <Route exact path="/authors/" component={Author} />
        </div>
      </Router>
    )
  }
}

export default App;