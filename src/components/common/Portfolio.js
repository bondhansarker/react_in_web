import React, {Component} from 'react';
import Header from '../common/Header';
import image1 from '../assets/img/portfolio/01-thumbnail.jpg';
import image2 from '../assets/img/portfolio/02-thumbnail.jpg';
import image3 from '../assets/img/portfolio/03-thumbnail.jpg';
import image4 from '../assets/img/portfolio/04-thumbnail.jpg';
import image5 from '../assets/img/portfolio/05-thumbnail.jpg';
import image6 from '../assets/img/portfolio/06-thumbnail.jpg';

//Reusable component
import SinglePortfolio from '../common/SinglePortifolio';

const items = [
  {
    title: "Threads",
    subtitle: "Illustration",
    image: image1
  },
  {
    title: "Explore",
    subtitle: "Graphic Design",
    logo: image2
  },
  {
    title: "Finish",
    subtitle: "Identity",
    image: image3
  },
  {
    title: "Lines",
    subtitle: "Branding",
    image: image4
  },
  {
    title: "Southwest",
    subtitle: "Website Design",
    logo: image5
  },
  {
    title: "Window",
    subtitle: "Photography",
    image: image6
  }

];

class Portfolio extends Component {
  render() {
    return (
      <div>

        <section className="page-section bg-light" id="portfolio">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">Portfolio</h2>
              <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
            <div className="row">

              {items.map((item,index)=>{
                return <SinglePortfolio {...item} key={index}/>
              })}

            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Portfolio;