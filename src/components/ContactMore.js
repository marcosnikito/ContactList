import React from 'react';
class Contact extends React.Component {
  render() {
    return (
          <div>
              <div className='row'>
                  <div className='img-contact-full col-lg-3'>
                      <img className='img-contact-full' src={this.props.contact.general.avatar} alt={this.props.contact.general.firstName}/>
                  </div>
                  <div className='col-lg-9 details-contact-full'>
                      <h1>Contact details</h1>
                      <ul>
                        <h5>---------------Personal--------------</h5>
                        <li>
                            <b>First name:</b> {this.props.contact.general.firstName}
                        </li>
                        <li>
                            <b>Last name:</b> {this.props.contact.general.lastName}
                        </li>
                            <h5>-----------------Job-----------------</h5>
                        <li>
                            <b>Company:</b> {this.props.contact.job.company}
                        </li>
                        <li>
                            <b>Office:</b> {this.props.contact.job.title}
                        </li>
                            <h5>---------------Contact----------------</h5>
                        <li>
                            <b>e-mail:</b> {this.props.contact.contact.email}
                        </li>
                        <li>
                            <b>Phone:</b> {this.props.contact.contact.phone}
                        </li>
                            <h5>---------------Address----------------</h5>
                        <li>
                            <b>Zio code:</b> {this.props.contact.address.zipCode}
                        </li>
                        <li>
                            <b>City:</b> {this.props.contact.address.city}
                        </li>
                        <li>
                            <b>Country:</b> {this.props.contact.address.country}
                        </li>
                        <li>
                            <b>Street:</b> {this.props.contact.address.street}
                        </li>
                      </ul>
                  </div>
              </div>
          </div>
    );
  }
}

export default Contact;
