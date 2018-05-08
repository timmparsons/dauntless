import React from 'react';

export class Author extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: []
    }
  }

  render() {
    return (
      <div id="app">
        <div id="map">
        </div>
        <p>Name: {this.props.users.name}</p>
        <p>Location</p>
      </div>
    )
  }
}
// export const Author = (props) => {
//   const componentDidMount = () => {
//     let map = new window.google.maps.Map(document.getElementById("map"), {
//       center: {lat: -34.397, lng: 150.644},
//       zoom: 8,
//       mapTypeId: 'roadmap',
//       });
//     }
  
//   )

// To Do:
// User long and latitide passed into Author
// {user.name} and {user.location} passed down from BlogPost