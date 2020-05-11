import React, {Component} from 'react';

//Reusable component
import ContactField from '../common/ContactField';


const fields = {

  section: [
    [
      {
        name: "name",
        elementName: "input",
        type: "text",
        placeholder: "Enter your name",
        message: "Please enter your name",
        klass: "",
      },
      {
        name: "email",
        elementName: "input",
        type: "email",
        placeholder: "Enter your email",
        message: "Please enter your mail",
        klass: "",
      },
      {
        name: "phone",
        elementName: "input",
        type: "text",
        placeholder: "Enter your phone number",
        message: "Please enter your phone number",
        klass: "mb-md-0"
      }
    ],
    [
      {
        name: "message",
        elementName: "textarea",
        type: "text",
        placeholder: "Type your message",
        message: "Please type your message",
        klass: "form-group-textarea mb-md-0"
      }
    ]
  ]
};

class Contact extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "",
      message: ""
    }
  }


  render() {
    return (
      <div>
        <section className="page-section" id="contact">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">Contact Us</h2>
              <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
            <form id="contactForm" name="sentMessage" noValidate="novalidate">
              <div className="row align-items-stretch mb-5">
                {fields.section.map((section,sectionIndex)=>{
                   return (
                     <div className="col-md-6" key={sectionIndex}>
                       {section.map((field, index) => {
                         return <ContactField {...field} key={index}
                                              value={this.state[field.name]}
                                              onChange={e => this.setState({
                                                [field.name]: e.target.value
                                              })}
                                />
                       })}
                     </div>
                   )
                })}



              </div>
              <div className="text-center">
                <button className="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">Send
                  Message
                </button>
              </div>
            </form>
          </div>
        </section>

      </div>
    )
  }
}

export default Contact;