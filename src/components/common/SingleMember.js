import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class SingleMember extends Component {
  render() {
    return (


    <div className="col-lg-4">
      <div className="team-member">
        <img className="mx-auto rounded-circle" src={this.props.image} alt="" />
        <h4>{this.props.title}</h4>
        <p className="text-muted">{this.props.subtitle}</p>
        <Link className="btn btn-dark btn-social mx-2" to="/!"><i className="fab fa-twitter"></i></Link>
        <Link className="btn btn-dark btn-social mx-2" to="/!"><i className="fab fa-facebook-f"></i></Link>
        <Link className="btn btn-dark btn-social mx-2" to="/!"><i className="fab fa-linkedin-in"></i></Link>
      </div>
    </div>
    )
  }
}

export default SingleMember;