import React, { ReactNode, useEffect, useRef, useState } from 'react';
import './App.css';
import SelectableTable from './components/SelectableTable';


function App() {
  const [title, setTitle] = useState('Some Title');
  const ref = useRef(null);
  useEffect(() => {
    window.addEventListener('keyup', (e) => {
      console.log('SPACE: ['+e.key+']')
      if (e.key === ' ') {
        setTitle('Some Title 2')
      }
    })
  })
  
  return (
    <SelectableTable title={ title }/>
  );
}

export default App;
