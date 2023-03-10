import React, { useEffect, useRef, useState } from "react";

const Dropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropDownRef = useRef(null);
  useEffect(() => {
    function handleClickOutDropdown(e) {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("click", handleClickOutDropdown);
    return () => {
      document.removeEventListener("click", handleClickOutDropdown);
    };
  }, []);
  return (
    <div className="relative w-full max-w-[400px]" ref={dropDownRef}>
      <div
        className="p-5 border border-gray-200 rounded-lg w-full cursor-pointer"
        onClick={() => {
          setShowDropdown(!showDropdown);
        }}
      >
        Selected
      </div>
      {showDropdown && (
        <div className="p-5 border border-gray-200 rounded-lg absolute top-full left-0 w-full bg-white">
          <div className="p-5 cursor-pointer">Javasript</div>
          <div className="p-5 cursor-pointer">ReactJs</div>
          <div className="p-5 cursor-pointer">VueJs</div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
