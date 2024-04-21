import { useTranslation } from "react-i18next";

// images
import inclination from "../../../assets/images/0.svg";
import rotation from "../../../assets/images/1.svg";
import distortion from "../../../assets/images/2.svg";
import colors from "../../../assets/images/3.svg";
import background from "../../../assets/images/4.svg";
import position from "../../../assets/images/5.svg";
import dimensions from "../../../assets/images/6.svg";
import mutilation from "../../../assets/images/7.svg";
import fonts from "../../../assets/images/8.svg";

const list = [
  { src: inclination, alt: "inclination" },
  { src: rotation, alt: "rotation" },
  { src: distortion, alt: "distortion" },
  { src: colors, alt: "colors" },
  { src: background, alt: "background" },
  { src: position, alt: "position" },
  { src: dimensions, alt: "dimensions" },
  { src: mutilation, alt: "mutilation" },
  { src: fonts, alt: "fonts" },
];

function Prohibitions() {
  const { t } = useTranslation();

  return (
    <div className="content w-full viewport gap-10 flex flex-col items-start justify-start">
      <div className="basic-column w-1/2 md:w-full">
        <h2 className="text-2xl">
          {t(`_pages:brandIdentity.identifier.title`)}
        </h2>
        <h4 className="text-xl poppins-700">
          {t(`_pages:brandIdentity.identifier.prohibitions.title`)}
        </h4>
        <p className="body">
          {t("_pages:brandIdentity.identifier.prohibitions.body.paragraph1")}
        </p>
      </div>
      <div className=" w-full flex justify-end">
        <div className="w-3/5 md:w-full">
          <ul className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 w-full">
            {list.map((image, i) => (
              <li
                key={i}
                className="flex flex-col items-start justify-end gap-5"
              >
                <img
                  src={image.src}
                  alt={t(
                    `_pages:brandIdentity.identifier.prohibitions.list.${image.alt}.alt`
                  )}
                />{" "}
                <p className="body">
                  {t(
                    `_pages:brandIdentity.identifier.prohibitions.list.${image.alt}.body`
                  )}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Prohibitions;
