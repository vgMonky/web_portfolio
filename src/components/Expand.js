import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'; // Using thinner Feather icons
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
        {isExpanded ? <FiChevronUp className="icon" /> : <FiChevronDown className="icon" />}
      </div>
      {isExpanded && <p className="description">{description}</p>}
    </div>
  );
};

export default Expand;
