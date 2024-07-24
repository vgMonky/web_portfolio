import React, { useState, useEffect } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'; // Using thinner Feather icons
import './Expand.css';

const Expand = ({ subtitle, description, children, open = false }) => {
  const [isExpanded, setIsExpanded] = useState(open);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    setIsExpanded(open);
  }, [open]);

  return (
    <div className="expand">
      <div className="header" onClick={handleToggle}>
        <h3>{subtitle}</h3>
        {isExpanded ? <FiChevronUp className="icon" /> : <FiChevronDown className="icon" />}
      </div>
      {isExpanded && (
        <div className="content">
          <p className="description">{description}</p>
          {children}
        </div>
      )}
    </div>
  );
};

export default Expand;