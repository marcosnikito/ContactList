import React from 'react';
import ContactsList from './components/ContactsList'
import Contacts from './data/clients.json';
class App extends React.Component {
  render() {
    return (
      <div>
          <ContactsList contacts={Contacts}/>
      </div>
    );
  }
}
export default App;
