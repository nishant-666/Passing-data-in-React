import React from 'react'
import Child from './Child';
import { Button } from 'semantic-ui-react';
import { useState } from 'react';
import '../App.css';

export default function Parent() {
  const [data, setData] = useState('');
  
  const parentToChild = () => {
    setData("This is data from Parent Component to the Child Component.");
  }
  return (
    <div>
      <Child parentToChild={data}/>
      
      <div className="child">
        <Button primary onClick={() => parentToChild()}>Click Parent To Child</Button>
      </div>
    </div>
  )
}