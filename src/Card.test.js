// make React available
import React from 'react';
//make the ReactDOM available, necessary for rendering the component
import ReactDOM from 'react-dom';
//make the Card component available
import Card from './Card';

describe('Cards component', () => {
    //smoke test, ensures that the component renders in the first place
    it('renders without crashing', () => {
        // first create a DOM element to render the component into
        const div = document.createElement('div');
        //render the component, this is the actual test, if something is wrong it will fail here
        ReactDOM.render(<App />, div);
        //clean up code
        ReactDOM.unmountComponentAtNode(div);
    });
}


/*it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card />, div);
  ReactDOM.unmountComponentAtNode(div);
});*/
