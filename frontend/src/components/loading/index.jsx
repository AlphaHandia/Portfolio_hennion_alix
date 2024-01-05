// PageLoader.jsx
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";



const PageLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return loading ? (
    <div className="page-loader-container">
      <div className="loader">
        {[...Array(18)].map((_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={faShieldAlt}
            className="icon"
            style={{
              transform: `rotate(${index * (360 / 18)}deg) translate(500%)`,
            }}
          />
        ))}
        <FontAwesomeIcon icon={faShieldAlt} className="center-icon" />
      </div>
  
    </div>
  ) : null;
};

export default PageLoader;
