import React from 'react';
import PropTypes from 'prop-types';

const ChildComponent = (props) => {
  console.log(props);

  // Destructuring Props the old Way
  const {
    title,
    subTitle,
    studentNumber,
    workshopAgenda,
    address: { city, country },
    children,
    handleAlert,
    conditionalProp,
  } = props;

  return (
    <div>
      {/*  {props.handleAlert(props.title)} */}
      <h1>{title}</h1>
      <p>{subTitle}</p>
      <h4>Students attending the workshop: {studentNumber} </h4>
      <h4>Workshop Agenda</h4>
      <ul>
        {workshopAgenda.map((el, i) => (
          <li key={i}>{el}</li>
        ))}
      </ul>
      <h5>
        Workshop Address: {city}, {country}
      </h5>
      <button onClick={() => handleAlert(title)}>Alert</button>
      {children}
      {conditionalProp ? (
        <h3>This is the {conditionalProp}</h3>
      ) : (
        <h3>There is no conditional prop</h3>
      )}
    </div>
  );
};

// Default Props
ChildComponent.defaultProps = {
  subTitle: 'This is a default value for the subTitle',
};

//PropTypes
ChildComponent.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  studentNumber: PropTypes.number.isRequired,
  workshopAgenda: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleAlert: PropTypes.func.isRequired,
};

export default ChildComponent;
