// make React available
import React from 'react';
//make the ReactDOM available, necessary for rendering the component
import ReactDOM from 'react-dom';
//make the Card component available
import Card from './Card';
//add the snapshot tests
import renderer from 'react-test-renderer';

describe('Cards component', () => {
    //smoke test, ensures that the component renders in the first place
    it('renders without crashing', () => {
        // first create a DOM element to render the component into
        const div = document.createElement('div');
        //render the component, this is the actual test, if something is wrong it will fail here
        ReactDOM.render(<Card />, div);
        //clean up code
        ReactDOM.unmountComponentAtNode(div);
    });

    //Render the component and create a human readable JSON file
    //Compare the rendered component to a saved version of the component
    it('renders the UI as expected', () => {
        const tree = renderer
          .create(<button type='button'> delete</button>) 
          .toJSON();
        expect(tree).toMatchSnapshot();  
    });
});