import React from 'react';
import Contact from './Contact';
class ContactsList extends React.Component {
    constructor(){
      super();
      this.state={
        search: ''
      };
    }

    updateSearch(event){
      this.setState({search: event.target.value.substr(0, 20)});
    }
  render() {
    let filteredContacts = this.props.contacts.filter(
      (contact) => {
        return contact.general.firstName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );
    return (
      <div id="wrapper">
          <div className='container-fluid'>
              <div className='row'>
                  <div className="col-lg-2" id='col-contacts'>
                      <div className="search-container">
                      <input type='text'
                              className='input-search'
                              placeholder='Search'
                              id='search'
                              value={this.state.search}
                              onChange={this.updateSearch.bind(this)}
                      />
                      </div>
                      <div className='contact-container'>
                              {filteredContacts.map((contact, index) =>{
                                return  <Contact key={index} contact={contact}/>
                              })}
                      </div>
                  </div>
                  <div className='col-lg-10' id='contact-center'>
                      <div id="contact-show-more">

                      </div>
                  </div>
              </div>
        </div>
      </div>
    );
  }
}

export default ContactsList;
