import React from 'react';
import ChildComponent from './ChildComponent';

const array = [
  'Introduction to React Props',
  'Type of Props',
  'Children Props',
  'Destructuring',
  'PropTypes',
  'Default Props',
  'Conditional Rendering',
  'Handling Events',
];

const ParentComponent = () => {
  const handleAlert = (name) => alert(`Hi! I am a ${name}`);

  return (
    <div>
      <ChildComponent
        // String Type
        title="Introduction to React Props"
        //subTitle={'Workshop || Thursday 8 April 2021 '}
        // Number Type
        studentNumber={22}
        // Array Type
        workshopAgenda={array}
        // Object Type
        address={{ city: 'Tunis', country: 'Tunisia' }}
        // Function Type
        handleAlert={handleAlert}
        //Conditional Prop
        //conditionalProp="Conditional Prop"
      >
        {/* Children Props */}
        <div>
          <h2>Hello! I am a child</h2>
          <p>Hey, I am a child </p>
          <button>Click Me!</button>
        </div>
      </ChildComponent>
    </div>
  );
};

export default ParentComponent;
