import React from 'react';
import { Helmet } from 'react-helmet';
import Banner from './components/Homepage/banner/Bannerbox';
import CardContainer from './components/Homepage/card/Card';
import Showcasing from './components/Homepage/Showcasing/Showcasing';
import WearToRepair from './components/Homepage/Showcasing/WearToRepair';

const Homepage = () => {
  return (
    <div>
      <Helmet>
        <title>Sabiote | Supplier of Surgical Consumables</title>
      </Helmet>
      <Banner />
      <CardContainer />
      <WearToRepair />
      <Showcasing />
    </div>
  );
}

export default Homepage;
