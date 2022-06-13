import { useLocation } from "react-router-dom";
import { useState } from "react";
const useNavbar = () => {
  const [navVisible, setNavVisible] = useState(false);
  const { pathname } = useLocation();
  function isActiveLink(linkPath: string) {
    if (linkPath === "/home" && pathname === "/") return true;
    return pathname.includes(linkPath) && pathname !== "/";
  }
  function toggleNav() {
    setNavVisible((prevNavVisible) => !prevNavVisible);
  }
  function isVisibleNav() {}
  return {
    isActiveLink,
    navVisible,
    toggleNav,
  };
};

export default useNavbar;
