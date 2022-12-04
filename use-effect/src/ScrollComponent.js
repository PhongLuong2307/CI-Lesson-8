import React, { useEffect } from 'react';

const ScrollComponent = () => {
    // useEffect handle scroll
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.scrollingElement.scrollTop;
            console.log(scrollTop);
          };
          document.addEventListener("scroll", handleScroll);

          // Clean up
          return () => {
            console.log("Unmounting scroll component");
            document.removeEventListener("scroll", handleScroll);
          };
    });

    return <div>Scroll Component</div>
}

export default ScrollComponent;