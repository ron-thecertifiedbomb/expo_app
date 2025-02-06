import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const updateIsMobile = () => {
      const { width } = Dimensions.get('window');
      setIsMobile(width < 768); // Adjust threshold as needed
    };

    // Initial check
    updateIsMobile();

    // Listen to screen size changes and update the state
    const subscription = Dimensions.addEventListener('change', updateIsMobile);

    // Cleanup by removing the listener using the subscription object
    return () => {
      if (subscription && subscription.remove) {
        subscription.remove(); // Remove event listener
      }
    };
  }, []);

  return isMobile;
};

export default useIsMobile;
