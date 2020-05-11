import React, {Component} from 'react';
import Header from '../common/Header';
import image from '../assets/img/services2.jpg';
import image1 from '../assets/img/about/1.jpg';
import image2 from '../assets/img/about/2.jpg';
import image3 from '../assets/img/about/3.jpg';
import image4 from '../assets/img/about/4.jpg';

//Reusable component
import SingleAbout from '../common/SingleAbout';
import Team from '../common/Team';

const elements = [
  {
    heading: "2009-2011",
    subHeading: "Our Humble Beginnings",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!",
    image: image1,
    klass: ""
  },
  {
    heading: "March 2011",
    subHeading: "An Agency is Born",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!",
    image: image2,
    klass: "timeline-inverted"

  },
  {
    heading: "December 2012",
    subHeading: "Transition to Full Service",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!",
    image: image3,
    klass: ""

  },
  {
    heading: "July 2014",
    subHeading: "Phase Two Expansion",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!",
    image: image4,
    klass: "timeline-inverted"

  }

];

class About extends Component {
  render() {
    return (
      <div>
        <Header
          title="Welcome To About Page"
          subtitle="It's Nice To Meet You"
          buttonText="Tell Me More"
          link="/about"
          showButton={true}
          image={image}
        />
        <section className="page-section" id="about">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">About</h2>
              <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
            <ul className="timeline">

              {elements.map((element,index)=>{
                return <SingleAbout {...element} key={index}/>
              })}

              <li className="timeline-inverted">
                <div className="timeline-image">
                  <h4>Be Part<br />Of Our<br />Story!</h4>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <Team/>
      </div>

    )
  }
}

export default About;