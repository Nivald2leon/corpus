import { useState, useEffect } from "react";
import Animation from "./Animation";

const Efecto = () => {
  const [showLoading, setShowLoading] = useState(true);

  let WOW;

  if (typeof window !== "undefined") {
    WOW = require("wowjs");
  }

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
    }, 400);
  }, []);

  useEffect(() => {
    const initializeWOW = async () => {
      if (WOW) {
        const wow = new WOW.WOW({
          boxClass: "wow",
          animateClass: "animated",
          offset: 0,
          mobile: true,
          live: true,
        });

        await wow.init();
      }
    };

    initializeWOW();
  }, [WOW]);

  return <>{showLoading && <Animation />}</>;
};

export default Efecto;
