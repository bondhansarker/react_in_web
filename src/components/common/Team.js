import React, {Component} from 'react';
import image1 from '../assets/img/team/1.jpg';
import image2 from '../assets/img/team/2.jpg';
import image3 from '../assets/img/team/3.jpg';

//Reusable component
import SingleMember from './SingleMember';

const members = [
  {
    title: "Threads",
    subtitle: "Illustration",
    image: image1
  },
  {
    title: "Explore",
    subtitle: "Graphic Design",
    image: image2
  },
  {
    title: "Finish",
    subtitle: "Identity",
    image: image3
  }
];

class Portfolio extends Component {
  render() {
    return (
      <div>

        <section className="page-section bg-light" id="team">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
              <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
            <div className="row">
              {members.map((member, index) => {
                return <SingleMember {...member} key={index}/>
              })}
            </div>
            <div className="row">
              <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam
                corporis ea, alias ut unde.</p></div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Portfolio;