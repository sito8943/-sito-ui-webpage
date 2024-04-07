import { useCallback, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

// emotion
import { css } from "@emotion/css";

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

// @sito-ui
import { IconButton } from "@sito/ui";

// components
import SitoLogo from "../../../components/Logos/SitoLogo";

export default function NavigationDrawer(props) {
  const { t } = useTranslation();

  const { pathname } = useLocation();

  const { visible, onClose, links } = props;

  const onEscapeDown = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", onEscapeDown);
    return () => {
      window.removeEventListener("keydown", onEscapeDown);
    };
  }, [onEscapeDown]);

  return (
    <div
      onClick={() => onClose()}
      className={`z-[51] w-screen h-screen fixed top-0 left-0 transition duration-500 ease-in-out bg-bg/40 ${
        visible
          ? "pointer-events-auto backdrop-blur-sm opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      <aside
        className={`fixed top-0 left-0 z-[51] w-[400px] xs:w-full  h-screen bg-bg/90 transition duration-[700ms] ease-in-out ${
          visible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        <div className="w-full h-full relative p-10 flex flex-col gap-10">
          <Link to="/" className={`text-white`}>
            <SitoLogo className="w-[100px] h-[75px]" />
          </Link>
          <nav>
            <ul className="flex gap-10 flex-col items-start justify-start">
              {links?.map(({ href, id }) => (
                <li
                  key={id}
                  className="w-full flex flex-col items-start justify-start"
                >
                  <a href={href} className={`text-white transition`}>
                    {t(`_pages:routes.${id}`)}
                  </a>
                  <div
                    className={`w-full grid ${css({
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
            onClick={() => onClose()}
            icon={<FontAwesomeIcon icon={faClose} />}
            className="!text-white absolute top-2 right-2"
          />
        </div>
      </aside>
    </div>
  );
}

NavigationDrawer.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  links: PropTypes.arrayOf(PropTypes.object),
};
