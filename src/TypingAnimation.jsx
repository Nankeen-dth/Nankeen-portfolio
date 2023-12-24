import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const TypingAnimation = () => {
  const textToType = "Jomil F. Peralta";
  const [displayText, setDisplayText] = useState("");
  const controls = useAnimation();

  useEffect(() => {
    const typeText = async () => {
      for (let i = 0; i <= textToType.length; i++) {
        setDisplayText(textToType.slice(0, i));
        await new Promise((resolve) => setTimeout(resolve, 100)); // Adjust typing speed here
      }
      await controls.start({ opacity: 1 }); // Show cursor after typing
    };

    typeText();
  }, [controls]);

  return (
    <div style={{ display: "inline-block", position: "relative" }}>
      <motion.span
        animate={controls}
        initial={{ opacity: 0 }}
        style={{ display: "inline-block" }}
      >
        {displayText}
      </motion.span>
      <motion.span
        style={{ position: "absolute", bottom: 0, opacity: 1 }}
        animate={{
          opacity: [1, 0],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        |
      </motion.span>
    </div>
  );
};

export default TypingAnimation;
