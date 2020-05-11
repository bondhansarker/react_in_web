import React, {Component} from 'react';
import image from '../assets/img/header-bg.jpg'

//header
import Header from '../common/Header';

//Parts
import Services from "../common/Services";
import Portfolio from "../common/Portfolio";
import Team from "../common/Team";
import Footer from "../common/Footer";

class Home extends Component {
  render() {
    return (
      <div>
        <Header
            title="Welcome To Our Studio"
            subtitle="It's Nice To Meet You"
            buttonText="Tell Me More"
            link="/services"
            showButton={true}
            image={image}
        />
        <Services/>
        <Portfolio/>
        <Team/>
        <Footer/>
      </div>
    )
  }
}

export default Home;