import React, { useState } from 'react';
import '../App.css'

function Box(props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
   
    <div className='outerDiv'>
    <div
      className="block"
      style={{
        backgroundColor: isHovered ? 'transparent' : props.color,
        borderColor: isHovered ? props.color : 'transparent',
        color: isHovered ? 'black' : 'white',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <button>Button</button>
    </div>
    </div>
    
  );
}

export default Box;