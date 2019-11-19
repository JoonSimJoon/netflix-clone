import React from 'react';
import Main from './pages/Main';
import {createGlobalStyle} from 'styled-components';

const Globalstyle = createGlobalStyle`
  * {
    margin : 0;
    padding :0;
  }
`

function App() {
 return(
   <React.Fragment>
     <Main></Main>
   </React.Fragment>
 );
}

export default App;
