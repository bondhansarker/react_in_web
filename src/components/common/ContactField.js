import React, {Component} from 'react';

class ContactField extends Component {
  render() {
    return (

      <div className={`form-group ${this.props.klass}`}>

        {this.props.elementName === "input" ?

          <input className="form-control"
                 id={this.props.name}
                 type={this.props.type}
                 placeholder={this.props.placeholder}
                 required="required"
                 data-validation-required-message={this.props.message}
                 value={this.props.value}
                 onChange={e=>this.props.onChange(e)}
          />
          :
          <textarea className="form-control"
                 id={this.props.name}
                 type={this.props.type}
                 placeholder={this.props.placeholder}
                 required="required"
                 data-validation-required-message={this.props.message}
                 value={this.props.value}
                 onChange={e=>this.props.onChange(e)}

          > </textarea>

        }
        <p className="help-block text-danger"></p>
      </div>

    )
  }
}

export default ContactField;