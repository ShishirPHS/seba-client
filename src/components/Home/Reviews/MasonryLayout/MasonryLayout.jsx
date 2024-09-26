import { useEffect, useRef, useState } from "react";
import Masonry from "masonry-layout";
import PropTypes from "prop-types";
import imagesLoaded from "imagesloaded";
import "./MasonryLayout.css";

const screenSizes = [
  { breakpoint: 1536, gutter: 31, fitWidth: true }, // 2xl
  { breakpoint: 1280, gutter: 20, fitWidth: true }, // xl
  { breakpoint: 1024, gutter: 16, fitWidth: true }, // lg
  { breakpoint: 768, gutter: 16, fitWidth: true }, // md
  { breakpoint: 640, gutter: 16, fitWidth: true }, // sm
];

const MasonryLayout = ({ children }) => {
  const [gutter, setGutter] = useState(10);
  const [fitWidth, setFitWidth] = useState(false);
  const masonryRef = useRef(null);

  useEffect(() => {
    const getGutterByScreenSize = (width) => {
      const size = screenSizes.find((s) => width >= s.breakpoint);
      return size ? size.gutter : 10; // default gutter for smaller screens
    };

    const getFitWidthValueByScreenSize = (width) => {
      const size = screenSizes.find((s) => width >= s.breakpoint);
      return size ? size.fitWidth : false; // default value for smaller screens
    };

    const handleResize = () => {
      const width = window.innerWidth;
      setGutter(getGutterByScreenSize(width));
      setFitWidth(getFitWidthValueByScreenSize(width));
    };

    handleResize(); // Set initial gutter
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const masonryInstance = new Masonry(masonryRef.current, {
      itemSelector: ".blogItem",
      percentPosition: true,
      gutter: gutter,
      fitWidth: fitWidth,
    });

    imagesLoaded(masonryRef.current, () => {
      masonryInstance.layout();
    });

    return () => {
      masonryInstance.destroy();
    };
  }, [children, gutter, fitWidth]);

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
