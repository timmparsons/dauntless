import React from "react";
import axios from "axios";
import GoogleMap from "./GoogleMap";

export class Author extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: []
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/users/${
          this.props.match.params.authorId
        }`
      )
      .then(res => this.setState({ persons: res.data }));
  }

  render() {
    return (
      <div>
        <h1>Author Name: {this.state.persons.name}</h1>
        <p>
          Author Location:
          {this.state.persons.address && this.state.persons.address.city
            ? this.state.persons.address.city
            : "something went wrong"}
        </p>
        <GoogleMap
          center={
            this.state.persons.address && this.state.persons.address.geo.lat
              ? {
                  lat: this.state.persons.address.geo.lat,
                  lng: this.state.persons.address.geo.lng
                }
              : undefined
          }
        />
      </div>
    );
  }
}
