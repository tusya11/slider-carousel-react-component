import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./App.css";
import images from "./images/images";

const App = () => {
  const [width, setWidth] = useState(0);

  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div>
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {images.map((image, index) => (
            <motion.div key={index} className="item">
              <img src={image} alt="carousel-img" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default App;
