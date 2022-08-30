import React from "react";
import {cleanup,fireEvent,render} from '@testing-library/react';
import Index from '../client/index.js'

it('Index.js rendered to root ', ()=>{
  // we are expecting a type of object, that's top layer tag is a div with id root  
  render(<Index/>)
  // expect(document.getElementById(root).toNotBe(null))
  //this test doesnt owrk
    // lets try making a mock and modifying jest config 
})
