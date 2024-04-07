import { useState, useCallback, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

// emotion
import { css } from "@emotion/css";

// @sito-ui
import { IconButton } from "@sito/ui";

// components
import NavigationDrawer from "./NavigationDrawer";
import SitoLogo from "../../../components/Logos/SitoLogo";

const links = [
  {
    href: "/",
    id: "home",
  },
  {
    id: "brandIdentity",
    href: "/brand-identity",
  },
];

function Navbar() {
  const { t } = useTranslation();

  const { pathname } = useLocation();

  const [transparency, setTransparency] = useState(true);

  const onScroll = useCallback(() => {
    let top = window.scrollY;
    setTransparency(top < 40);
  }, []);

  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  const showLogo = pathname !== "/brand-identity" || !transparency;

  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header
        className={`expand flex items-center justify-center w-full fixed top-0 left-0 min-h-[60px] transition duration-500 z-[50] ${
          transparency ? "" : "bg-bg backdrop-blur-lg"
        }`}
      >
        <div
          className={`relative transition-all duration-500 flex items-center justify-between ${
            pathname === "/brand-identity" ? "px-20 sm:px-10" : "px-10"
          } w-full ${transparency ? "h-[100px]" : "h-[80px]"}`}
        >
          <Link
            to="/"
            className={`text-white transition duration-500 ease-in-out ${
              showLogo ? "opacity-100" : "opacity-0"
            }`}
          >
            <SitoLogo className="w-[100px] h-[75px]" />
          </Link>
          <nav className="sm:hidden">
            <ul className="flex gap-10">
              {links.map(({ href, id }) => (
                <li
                  key={id}
                  className="flex flex-col items-center justify-center"
                >
                  <Link to={href} className={`text-white transition`}>
                    {t(`_pages:routes.${id}`)}
                  </Link>
                  <div
                    className={`w-[120%] grid ${css({
                      gridTemplateRows: pathname === href ? "1fr" : "0fr",
                      transition: "grid-template-rows 0.5s ease-in-out",
                    })}`}
                  >
                    <div className="w-full overflow-hidden">
                      <div className={`border-white border-[1px] h-0`}></div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </nav>
          <IconButton
            onClick={() => setShowMenu(true)}
            icon={<FontAwesomeIcon icon={faBars} />}
            className="!text-white msm:hidden"
          />
        </div>
      </header>
      <NavigationDrawer
        links={links}
        visible={showMenu}
        onClose={() => setShowMenu(false)}
      />
    </>
  );
}

export default Navbar;
