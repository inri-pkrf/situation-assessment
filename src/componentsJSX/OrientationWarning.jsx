import React, { useEffect, useState } from 'react';
import '../componentsCSS/OrientationWarning.css';

const OrientationWarning = () => {
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth && window.innerWidth < 769);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isPortrait) return null;

  return (
    <div className="portrait-warning">
      <img
        src={`${process.env.PUBLIC_URL}/assests/imgs/rotate.png`}
        alt="Rotate Phone"
        className="rotate-phone-icon"
      />
      <p>אנא סובב/י את הטלפון למצב רוחבי</p>
    </div>
  );
};

export default OrientationWarning;
