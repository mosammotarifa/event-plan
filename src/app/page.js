import Achievenments from '@/component/Achievenments';
import Banner from '@/component/Banner';
import Events from '@/component/Events';
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
    </div>
  );
};

export default Home;