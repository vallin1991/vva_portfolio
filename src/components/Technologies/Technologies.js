import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
  <SectionDivider divider />
  
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>
  I have worked with a variety of technologies in the world of web development.
    From back-end to UI/UX design.
  </SectionText>
  <List>
    <ListItem>
      <picture>
        <DiReact size="3rem" />
      </picture>
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Experiece with <br />
          React.js, Vue.js, Next.js,
          HTML 5 and CSS
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <picture>
        <DiFirebase size="3rem" />
      </picture>
      <ListContainer>
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Experience with <br />
          Node and Databases
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <picture>
        <DiZend size="3rem" />
      </picture>
      <ListContainer>
        <ListTitle>UI/UX</ListTitle>
        <ListParagraph>
          Experience with <br />
          tools like Adobe XD
        </ListParagraph>
      </ListContainer>
    </ListItem>
  </List>
  
  <SectionDivider colorAlt />
</Section>

);

export default Technologies;
