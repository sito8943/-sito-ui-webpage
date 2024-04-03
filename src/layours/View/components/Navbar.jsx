import { useState, useEffect, useCallback } from "react";
import { useTranslation, withTranslation, Trans } from "react-i18next";
import { useLocation } from "react-router-dom";

// @sito/ui
import { IconButton } from "@sito/ui";

// font awesome
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  const [transparency, setTransparency] = useState(true);

  const onScroll = useCallback(() => {
    const top = window.scrollY;
    setTransparency(top < 60);
  }, [setTransparency]);

  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  const { t, i18n } = useTranslation();

  const location = useLocation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header
      className={`flex items-center justify-center w-full fixed top-0 left-0 min-h-[60px] transition duration-500 z-[50] ${
        transparency ? "" : "bg-dark-drawer-background backdrop-blur-lg"
      }`}
    >
      <div
        className={`transition-all duration-500 flex items-center justify-between responsive-container ${
          transparency ? "h-[100px]" : " h-[60px]"
        }`}
      >
        <a></a>
        <nav></nav>
        <IconButton icon={<FontAwesomeIcon icon={faBars} />} />
      </div>
    </header>
  );
}
