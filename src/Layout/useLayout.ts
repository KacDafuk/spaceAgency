import { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Layout.module.css";
import HomeMobSrc from "../assets/layoutImages/home/background-home-mobile.jpg";

import CrewMobSrc from "../assets/layoutImages/crew/background-crew-mobile.jpg";

import DestinationMobSrc from "../assets/layoutImages/destination/background-destination-mobile.jpg";

import TechnologyMobSrc from "../assets/layoutImages/technology/background-technology-mobile.jpg";

import HomeTabSrc from "../assets/layoutImages/home/background-home-tablet.jpg";

import CrewTabSrc from "../assets/layoutImages/crew/background-crew-tablet.jpg";

import DestinationTabSrc from "../assets/layoutImages/destination/background-destination-tablet.jpg";

import TechnologyTabSrc from "../assets/layoutImages/technology/background-technology-tablet.jpg";

import HomeDeskSrc from "../assets/layoutImages/home/background-home-desktop.jpg";

import CrewDeskSrc from "../assets/layoutImages/crew/background-crew-desktop.jpg";

import DestinationDeskSrc from "../assets/layoutImages/destination/background-destination-desktop.jpg";

import TechnologyDeskSrc from "../assets/layoutImages/technology/background-technology-desktop.jpg";
const layoutImagesData = {
  home: {
    mobile: HomeMobSrc,
    tablet: HomeTabSrc,
    desktop: HomeDeskSrc,
  },
  crew: {
    mobile: CrewMobSrc,
    tablet: CrewTabSrc,
    desktop: CrewDeskSrc,
  },
  destination: {
    mobile: DestinationMobSrc,
    tablet: DestinationTabSrc,
    desktop: DestinationDeskSrc,
  },
  technology: {
    mobile: TechnologyMobSrc,
    tablet: TechnologyTabSrc,
    desktop: TechnologyDeskSrc,
  },
};
const useLayout = () => {
  const layoutRef = useRef<HTMLImageElement | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    function setLoadingFalse() {
      setLoading(false);
    }

    if (layoutRef) {
      layoutRef.current?.addEventListener("load", setLoadingFalse);
    }
  }, []);
  const { pathname } = useLocation();
  function getSrcSet(path: string) {
    if (path === "/") {
      path = "home";
    } else {
      path = path.slice(1);
    }
    return `${
      layoutImagesData[path as keyof typeof layoutImagesData]["desktop"]
    } 1200w, ${
      layoutImagesData[path as keyof typeof layoutImagesData]["tablet"]
    } 772w, ${
      layoutImagesData[path as keyof typeof layoutImagesData]["mobile"]
    } 500w`;
  }

  return {
    layoutRef,
    srcSetData: getSrcSet(pathname),
    loading,
  };
};

export default useLayout;
