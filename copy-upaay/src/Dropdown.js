import React, { useState } from 'react';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <span>
      <a onClick={() => setIsOpen(!isOpen)}>Services</a>
      {isOpen && (
          <a>
          <p>Option A</p>
          <p>Option B</p>
          <p>Option C</p>
        </a>
      )}
      </span>
  );
}

export default Dropdown;