import React, {Component} from 'react';

class SingleAbout extends Component {
  render() {
    return (
      <li className={this.props.klass}>
        <div className="timeline-image"><img className="rounded-circle img-fluid" src={this.props.image} alt=""/>
        </div>
        <div className="timeline-panel">
          <div className="timeline-heading">
            <h4>{this.props.heading}</h4>
            <h4 className="subheading">{this.props.subHeading}</h4>
          </div>
          <div className="timeline-body"><p className="text-muted">{this.props.description}</p></div>
        </div>
      </li>
    )
  }
}

export default SingleAbout;