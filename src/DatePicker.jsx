import React, { useState, useEffect, useRef } from 'react';
import cal from './images/icn-calendario.png';
import CustomCalendar from './CustomCalendar';

const DatePicker = ({ value }) => {
  const [clicked, setClicked] = useState(false);
  const calendarRef = useRef(null);

  const clickHandler = () => {
    setClicked(true);
  };

  const handleOutsideClick = (event) => {
    if (calendarRef.current && !calendarRef.current.contains(event.target)) {
      setClicked(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div ref={calendarRef} className='datePicker'>
      {clicked && <CustomCalendar />}
      <input onClick={clickHandler} type='text' readOnly='readonly' value={value} />
      <img onClick={clickHandler} src={cal} alt="Calendar" />
    </div>
  );
};

export default DatePicker;