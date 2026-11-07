import ConsultationBooking from '@/component/contectUs.jsx/ConsultationBooking';
import ContactHero from '@/component/contectUs.jsx/ContactHero';
import ContactInfo from '@/component/contectUs.jsx/ContactInfo';

import React from 'react';

const page = () => {
    return (
        <div>
            <ContactHero/>
            <ContactInfo/>
            {/* <InquiryForm/> */}
            <ConsultationBooking/>
        </div>
    );
};

export default page;