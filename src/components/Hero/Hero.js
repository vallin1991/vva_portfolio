
import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
      I have a Bachelor degree in Science of Computer Engineering. I have worked providing IT services in different industries such as farms, law firms, Puerto Rico Department of Corrections and Rehabilitation, hospitals, medical clinics and now I am working in South San Francisco in a biotech company.
      </SectionText>
      <Button onClick={() => window.location = 'mailto:contact@victorvallinavila.com'}>Contact</Button>
    </LeftSection>
  </Section>
</>
);

export default Hero;