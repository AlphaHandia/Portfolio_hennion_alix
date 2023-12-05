
import React, { useEffect, useState } from 'react';

const PageLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return loading ? (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: '#000', // ajustez selon votre thème
        color: '#fff', // ajustez selon votre thème
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '24px',
        zIndex: 9999,
      }}
    >
      Loading...
    </div>
  ) : null;
};

export default PageLoader;
