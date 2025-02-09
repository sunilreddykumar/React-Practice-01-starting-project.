//import {useState} from 'react';
//import { CORE_CONCEPTS, EXAMPLES } from './data.js';
//import componentImg from './assets/components.png';
//import proimg from './assets/jsx-ui.png';
//import rcimg from './assets/state-mgmt.png';
//import excimg from './assets/config.png';

//import CoreConcept  from './Components/CoreConcept.jsx';
import Header from './Components/Header/Header.jsx';
import CoreConcepts from './Components/CoreConcepts.jsx';
import Examples from './Components/Examples.jsx';
//import DynamicForm from './Components/DynamicForm.jsx';
import { EXAMPLES } from './data.js';

function App() {
  return (
    <>
      <Header/>
     
      
      <main>
        <CoreConcepts/>
        <Examples/>
      </main>
    </>
  );
}

export default App;
