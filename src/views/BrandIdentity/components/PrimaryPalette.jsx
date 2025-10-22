import { useStyle } from "@sito/ui";

// components
import ColorOpacity from "./ColorOpacity";

// styles
import "./styles.css";

function PrimaryPalette() {
  const { colors } = useStyle();

  return (
    <div className="palette-container">
      <div className="hidden-on-md h-[76px]" />
      <ColorOpacity
        color={colors.primary.default}
        description={
          <>
            PANTONE PMS 18-1662 TCX <br />
            #CD212A <br />
            RGB: 205, 33, 42 <br />
            CMYK: 0, 84, 80, 20
          </>
        }
      />
      <ColorOpacity
        color={colors.secondary.default}
        description={
          <>
            PANTONE PMS 282 C <br />
            #041E42 <br />
            RGB: 4, 30, 63 <br />
            CMYK: 94, 55, 0, 74
          </>
        }
      />
    </div>
  );
}

export default PrimaryPalette;
