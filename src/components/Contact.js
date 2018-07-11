import React from 'react';
import ReactDOM from 'react-dom';
import View from './View';
class Contact extends React.Component {
  showMore(){
    ReactDOM.render(<View contact={this.props.contact}/>, document.getElementById('contact-show-more'));
  }
  render() {
    return (
          <div className='space bordered' id={this.props.key} onClick={this.showMore.bind(this)}>
              <div className='row'>
                  <div className='col-lg-4 img'>
                        <img className='rounded' src={this.props.contact.general.avatar} alt={this.props.contact.general.firstName}/>
                  </div>
                  <div className='col-lg-8'>
                        <div className='row'>
                                <span className='font-weight-bold name'>{this.props.contact.general.firstName} {this.props.contact.general.lastName}</span>
                        </div>
                        <div className='row'>
                            <span className='font-weight-normal job'>{this.props.contact.job.company}</span>
                        </div>
                  </div>
              </div>
          </div>
    );
  }
}

export default Contact;
