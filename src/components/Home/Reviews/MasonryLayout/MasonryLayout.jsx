import { useEffect, useRef, useState } from "react";
import Masonry from "masonry-layout";
import PropTypes from "prop-types";
import imagesLoaded from "imagesloaded";
import "./MasonryLayout.css";

const MasonryLayout = ({ children }) => {
  const [gutter, setGutter] = useState(10);
  const masonryRef = useRef(null);

  const getGutterByScreenSize = (width) => {
    if (width >= 1920) return 31; // 3xl
    if (width >= 1589) return 31; // 2xl
    if (width >= 1280) return 20; // xl
    if (width >= 1024) return 16; // lg
    if (width >= 768) return 16; // md
    if (width >= 640) return 16; // sm
    return 10; // default gutter for smaller screens
  };

  useEffect(() => {
    const handleGutter = () => {
      const width = window.innerWidth;
      setGutter(getGutterByScreenSize(width));
    };

    handleGutter(); // Set initial gutter
    window.addEventListener("resize", handleGutter);

    return () => {
      window.removeEventListener("resize", handleGutter);
    };
  }, []);

  useEffect(() => {
    const masonryInstance = new Masonry(masonryRef.current, {
      itemSelector: ".blogItem",
      percentPosition: true,
      gutter: gutter,
    });

    imagesLoaded(masonryRef.current, () => {
      masonryInstance.layout();
    });

    return () => {
      masonryInstance.destroy();
    };
  }, [children, gutter]);

  return (
    <div ref={masonryRef} className="masonry-grid">
      {children}
    </div>
  );
};

MasonryLayout.propTypes = {
  children: PropTypes.node,
};

export default MasonryLayout;
