import { useState, useCallback, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { css } from "@emotion/css";

// components
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

  console.log(pathname);

  const [transparency, setTransparency] = useState(true);

  const onScroll = useCallback(() => {
    let top = window.scrollY;
    setTransparency(top < 60);
  }, []);

  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  return (
    <header
      className={`expand flex items-center justify-center w-full fixed top-0 left-0 min-h-[60px] transition duration-500 z-[50] ${
        transparency ? "" : "bg-bg backdrop-blur-lg"
      }`}
    >
      <div
        className={`transition-all duration-500 flex items-center justify-between px-10 w-full ${
          transparency ? "h-[100px]" : "h-[60px]"
        }`}
      >
        <Link to="/" className="text-white">
          <SitoLogo className="w-[100px] h-[75px]" />
        </Link>
        <nav className="">
          <ul className="flex gap-10">
            {links.map(({ href, id }) => (
              <li
                key={id}
                className="flex flex-col items-center justify-center"
              >
                <a href={href} className={`text-white transition`}>
                  {t(`_pages:routes.${id}`)}
                </a>
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
      </div>
    </header>
  );
}

export default Navbar;
