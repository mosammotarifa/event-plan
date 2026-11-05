import Achievenments from '@/component/Achievenments';
import Banner from '@/component/Banner';
import CTA from '@/component/CTA';
import Events from '@/component/Events';
import FAQ from '@/component/FAQ';
import Howwework from '@/component/Howwework';
import Services from '@/component/Services';
import Testimonials from '@/component/Testimonials';
import WhyChooseUs from '@/component/WhyChooseUs';

import React from 'react';

const Home = () => {
  return (
    <div>
    
     <Banner/>
     <Achievenments/>
     <Events/>
     <Services/>
     <WhyChooseUs/> 
     <Testimonials/>
     <Howwework/>
     <FAQ/>
     <CTA/>
    </div>
  );
};

export default Home;