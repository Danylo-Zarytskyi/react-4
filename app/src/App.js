import { useState } from 'react';
import First from './components/firstComp';
import Second from './components/secondComp';
import Btn from './components/thirdComp';
import './App.css';

function App() {
  const [ status, setStatus ] = useState(false);

  const click = () => { setStatus(!status) }
  return (
    <div className='App-header'>
        <Btn click={click}>
          switch condition
        </Btn>
        <div>      
          <Second>
             zxc
          </Second>
          <First 
            condition={status}
          />
        </div>
    </div>
  );
}

export default App;
