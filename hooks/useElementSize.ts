import { useState, useEffect, useRef } from 'react';

const useElementSize = (id: string) => {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Function to update the size state with the current dimensions of the element.
    const handleResize = () => {
      // Check if the ref is assigned to a DOM element before accessing its properties.
      if (elementRef.current) {
        setSize({
          width: elementRef.current.offsetWidth,
          height: elementRef.current.offsetHeight
        });
      }
    };

    // Assign the DOM element to the ref and update the size.
    const element = document.getElementById(id);
    if (element) {
      elementRef.current = element;
      handleResize();
    }

    // Add and remove the resize event listener for window resize events.
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [id]);

  return size;
};

export default useElementSize;
