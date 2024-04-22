import { useState } from 'react';
import './style.css';

function Btn(props) {
  const { click, children } = props;
  return (
    <div>
        <button onClick={click}>
          {children}
        </button>
    </div>
  );
}

export default Btn;
