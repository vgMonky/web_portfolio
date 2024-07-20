import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './Expand.css';

const Expand = ({ subtitle, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="expand">
      <div className="header" onClick={handleToggle}>
        <h3>{subtitle}</h3>
        {isExpanded ? <FaChevronUp className="icon" /> : <FaChevronDown className="icon" />}
      </div>
      {isExpanded && <p className="description">{description}</p>}
    </div>
  );
};

export default Expand;
