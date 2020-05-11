import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer py-4">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4 text-lg-left">Copyright © Your Website 2020</div>
              <div className="col-lg-4 my-3 my-lg-0">
                <Link className="btn btn-dark btn-social mx-2" to="/!"><i className="fab fa-twitter"></i></Link><a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a><a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
              </div>
              <div className="col-lg-4 text-lg-right"><a className="mr-3" href="#!">Privacy Policy</a><a href="#!">Terms of Use</a></div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default Footer;