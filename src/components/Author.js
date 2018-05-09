import React from 'react';

export class Author extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: []
    };
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      const persons = res.data.map(person => {
        return <div key={person.results}>{person.name}</div>;
      });
      this.setState({ persons });
      console.log("state", this.state.persons);
    });
  }

  render() {
    return (
      <div id="app">
        <div id="map">{this.state.persons}</div>
      </div>
    );
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