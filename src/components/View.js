import React from 'react';
import ContactMore from './ContactMore';
class View extends React.Component {
  render(){
    return(
      <div>
          <ContactMore contact={this.props.contact}/>
      </div>
    );
  }
}

export default View;
