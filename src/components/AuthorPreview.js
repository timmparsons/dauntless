import React from 'react';
import axios from 'axios';
import {Author} from './Author';

export class AuthorPreview extends React.Component {
  render() {
    return (
      <div>
        <h1>Some data</h1>
      </div>
    );
  }
}


    //   <div className="blog-post">
      //   <img src="https://picsum.photos/300/300" alt="#"/>        
      //     <h1 className="blog-post-h1">{this.state.posts.title}</h1>
      //     <p className="blog-post-p">{this.state.posts.body}</p>
      //     <Author id={this.state.users.data} />
           
      //     <Comments />              
      // </div>

//   render() {
//     return (
//       <div>
//         { this.state.users.map(users => 
//           <Author 
//             id={users.id} 
//             key={users.id}
//             name={users.name}
//             location={users.location} />
//         )}
//       </div>
//     )
//   }
// }