import { useState } from 'react';

import TabButton from './TabButton.jsx';
import Section from './Sections.jsx';
import { EXAMPLES } from '../data.js';
import Tabs from './Tabs.jsx';

export default function Examples() {

    const [selectedTopic, setSelectedTopic ]= useState();
   
  //let tabContent = 'please click the button';
  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton);
   //console.log(tabContent);
}

let tabContent = <p>please select a topic.</p>;

if(selectedTopic){
  tabContent = (
  <div id="tab-content"> 
  <h3>{EXAMPLES[selectedTopic].title}</h3>
  <p>{EXAMPLES[selectedTopic].description}</p>
  <pre>
    <code>{EXAMPLES[selectedTopic].code}</code>
  </pre>
</div>
);
}
    return (
        <Section title= "Examples" id="Examples">
          <Tabs buttons={<div><TabButton  isSelecrted = {selectedTopic === 'components'} 
                     onClick={() => handleSelect('components')}>
                      Components
            </TabButton>
            <TabButton isSelecrted = {selectedTopic === 'jsx'}  onClick={() =>handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelecrted = {selectedTopic === 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelecrted = {selectedTopic === 'state'}  onClick={() => handleSelect('state')}>State</TabButton> </div>} >{tabContent}</Tabs>
           <menu>
            
           </menu>
         
        </Section>
    );
}
