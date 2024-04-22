import { useState } from 'react';
import './style.css';

function First(props) {
  const { condition } = props;
  return (
    <div>
        { condition ? 'false' : 'true' }
    </div>
  );
}

export default First;
