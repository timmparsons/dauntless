import React from 'react';

export class AuthorPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  render() {
    return (
      <div>
        { this.state.users.map(users => 
          <Author 
            id={users.id} 
            key={users.id}
            name={users.name}
            location={users.location} />
        )}
      </div>
    )
  }
}